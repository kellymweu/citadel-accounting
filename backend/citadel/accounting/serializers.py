from rest_framework import serializers
from .models import *

#serializers convert django models to json format to be read in an api
class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ["id","item_name", "tax_type", "SKU", "marked_price"]

class PurchaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Purchase
        fields = ["id","supplier_name","purchase_date","purchase_quantity","invoice_number","item_name","purchase_price","tax_type","sub_total"]

class SaleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sale
        fields = ["id","item_name","sale_quantity","selling_price","tax_type","sub_total"]