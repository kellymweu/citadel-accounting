from rest_framework import serializers
from .models import Sale, SaleItem
from inventory.models import Item
from invoicing.models import Customer

class SaleItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = SaleItem
        fields = '__all__'

class SaleSerializer(serializers.ModelSerializer):
    saleitem_set = SaleItemSerializer(many=True, required=False)  # Add this field

    class Meta:
        model = Sale
        fields = '__all__'

    def create(self, validated_data):
        sale_items_data = validated_data.pop('saleitem_set', [])
        sale = Sale.objects.create(**validated_data)
        for item_data in sale_items_data:
            SaleItem.objects.create(sale=sale, **item_data)
        return sale

    def update(self, instance, validated_data):
        sale_items_data = validated_data.pop('saleitem_set', [])
        instance.customer = validated_data.get('customer', instance.customer)
        instance.sale_date = validated_data.get('sale_date', instance.sale_date)
        instance.tax_type = validated_data.get('tax_type', instance.tax_type)
        instance.save()

        # Update SaleItems
        existing_items = {item.id: item for item in instance.saleitem_set.all()}
        for item_data in sale_items_data:
            item_id = item_data.get('id')
            if item_id:
                item = existing_items.pop(item_id, None)
                if item:
                    item.sale_quantity = item_data.get('sale_quantity', item.sale_quantity)
                    item.selling_price = item_data.get('selling_price', item.selling_price)
                    item.save()
            else:
                SaleItem.objects.create(sale=instance, **item_data)

        # Delete removed items
        for item in existing_items.values():
            item.delete()

        return instance
