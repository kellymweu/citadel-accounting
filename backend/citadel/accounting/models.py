from django.db import models

# Create your models here.
#Stocks Counts
class Item(models.Model):
    TAX_TYPES  = {
        "16% VAT": "16% VAT",
        "EXEMPT": "EXEMPT",
        "2% CATERING" : "2% CATERING LEVY",
        "14% VAT" : "14% VAT"
    }
    item_name = models.CharField(max_length=50)
    tax_type = models.CharField(max_length=20, choices=TAX_TYPES)
    SKU = models.CharField(max_length=10)
    marked_price = models.CharField(max_length=50, blank=True)

class Purchase(models.Model):
    TAX_TYPES  = {
        "16% VAT": "16% VAT",
        "EXEMPT": "EXEMPT",
        "2% CATERING" : "2% CATERING LEVY",
        "14% VAT" : "14% VAT"
    }
    supplier_name = models.CharField(max_length=100)
    purchase_date = models.DateTimeField(auto_now=False, auto_now_add=False)
    purchase_quantity = models.IntegerField(max_length=50)
    invoice_number = models.CharField(max_length=100)
    item_name = models.ForeignKey(Item, on_delete=models.CASCADE)
    purchase_price = models.IntegerField(max_length=100)
    tax_type = models.CharField(max_length=20, choices=TAX_TYPES)
    subtotal = models.IntegerField(max_length=100)


class Sale(models.Model):
    TAX_TYPES  = {
        "16% VAT": "16% VAT",
        "EXEMPT": "EXEMPT",
        "2% CATERING" : "2% CATERING LEVY",
        "14% VAT" : "14% VAT"
    }
    item_name = models.ForeignKey(Item, on_delete=models.CASCADE)
    sale_quantity = models.IntegerField(max_length=50)
    selling_price = models.IntegerField(max_length=100)
    tax_type = models.CharField(max_length=20, choices=TAX_TYPES)
    sub_total = models.IntegerField(max_length=100)

