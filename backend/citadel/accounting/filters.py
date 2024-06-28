from django_filters.rest_framework import FilterSet
from .models import *

class ItemFilter(FilterSet):
    class Meta:
        model = Item
        fields =  {
            "item_name": ["exact"],
            "SKU": ["exact"],
            "tax_type": ["exact"],
            "marked_price": ["gt", "lt"],
        }