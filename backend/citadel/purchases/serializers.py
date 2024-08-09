# from rest_framework import serializers
# from purchases.models import Purchase, PurchaseItem, Supplier
# from inventory.models import Item

# class SupplierSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Supplier
#         fields = '__all__'

# class PurchaseItemSerializer(serializers.ModelSerializer):
#     sub_total = serializers.DecimalField(max_digits=10, decimal_places=2, read_only=True)

#     class Meta:
#         model = PurchaseItem
#         fields = '__all__'

#     def validate(self, data):
#         if data['purchase_quantity'] <= 0:
#             raise serializers.ValidationError("Quantity must be positive")
#         if data['purchase_price'] <= 0:
#             raise serializers.ValidationError("Price must be positive")
#         return data

# class PurchaseSerializer(serializers.ModelSerializer):
#     purchaseitem_set = PurchaseItemSerializer(many=True)
#     sub_total = serializers.DecimalField(max_digits=10, decimal_places=2, read_only=True)

#     class Meta:
#         model = Purchase
#         fields = '__all__'

#     def create(self, validated_data):
#         purchase_items_data = validated_data.pop('purchaseitem_set')
#         purchase = Purchase.objects.create(**validated_data)
#         for item_data in purchase_items_data:
#             PurchaseItem.objects.create(purchase=purchase, **item_data)
#         purchase.save()  # This will trigger the sub_total calculation
#         return purchase

#     def update(self, instance, validated_data):
#         purchase_items_data = validated_data.pop('purchaseitem_set', [])
#         instance.supplier_name = validated_data.get('supplier_name', instance.supplier_name)
#         instance.purchase_date = validated_data.get('purchase_date', instance.purchase_date)
#         instance.invoice_number = validated_data.get('invoice_number', instance.invoice_number)
#         instance.tax_type = validated_data.get('tax_type', instance.tax_type)

#         # Update or create PurchaseItems
#         instance.purchaseitem_set.all().delete()  # Remove existing items
#         for item_data in purchase_items_data:
#             PurchaseItem.objects.create(purchase=instance, **item_data)

#         instance.save()  # This will trigger the sub_total calculation
#         return instance

#     def validate_purchaseitem_set(self, value):
#         if not value:
#             raise serializers.ValidationError("At least one item is required for a purchase.")
#         return value


from rest_framework import serializers
from purchases.models import Purchase, PurchaseItem, Supplier
from inventory.models import Item

class SupplierSerializer(serializers.ModelSerializer):
    class Meta:
        model = Supplier
        fields = '__all__'

class PurchaseItemSerializer(serializers.ModelSerializer):
    sub_total = serializers.DecimalField(max_digits=10, decimal_places=2, read_only=True)

    class Meta:
        model = PurchaseItem
        fields = '__all__'

    def validate(self, data):
        if data['purchase_quantity'] <= 0:
            raise serializers.ValidationError("Quantity must be positive")
        if data['purchase_price'] <= 0:
            raise serializers.ValidationError("Price must be positive")
        return data

class PurchaseSerializer(serializers.ModelSerializer):
    purchaseitem_set = PurchaseItemSerializer(many=True)
    sub_total = serializers.DecimalField(max_digits=10, decimal_places=2, read_only=True)

    class Meta:
        model = Purchase
        fields = '__all__'

    def create(self, validated_data):
        purchase_items_data = validated_data.pop('purchaseitem_set')
        purchase = Purchase.objects.create(**validated_data)
        for item_data in purchase_items_data:
            PurchaseItem.objects.create(purchase=purchase, **item_data)
        purchase.save()  # This will trigger the sub_total calculation
        return purchase

    def update(self, instance, validated_data):
        purchase_items_data = validated_data.pop('purchaseitem_set', [])
        instance.supplier_name = validated_data.get('supplier_name', instance.supplier_name)
        instance.purchase_date = validated_data.get('purchase_date', instance.purchase_date)
        instance.invoice_number = validated_data.get('invoice_number', instance.invoice_number)
        instance.tax_type = validated_data.get('tax_type', instance.tax_type)

        # Update or create PurchaseItems
        instance.purchaseitem_set.all().delete()  # Remove existing items
        for item_data in purchase_items_data:
            PurchaseItem.objects.create(purchase=instance, **item_data)

        instance.save()  # This will trigger the sub_total calculation
        return instance

    def validate_purchaseitem_set(self, value):
        if not value:
            raise serializers.ValidationError("At least one item is required for a purchase.")
        return value
