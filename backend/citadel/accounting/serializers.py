from rest_framework import serializers
from .models import *

#serializers convert django models to json format to be read in an api
class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ["item_name", "tax_type", "SKU", "marked_price"]