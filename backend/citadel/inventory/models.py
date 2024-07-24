from django.db import models

# Create your models here.
#Stocks Counts
class Item(models.Model):
    TAX_TYPES = [
        ("16% VAT", "16% VAT"),
        ("EXEMPT" , "EXEMPT"),
        ("2% CATERING" , "2% CATERING LEVY"),
        ("14% VAT" , "14% VAT"),
    ]
    item_name = models.CharField(max_length=50)
    tax_type = models.CharField(max_length=20, choices=TAX_TYPES)
    SKU = models.CharField(max_length=10, unique=True)
    marked_price = models.DecimalField(max_length=50, blank=True)

    #This is a string representation of all Item Objects
    def __str__(self):
        return(f"ID:{self.id}, item_name:{self.item_name}, tax_type:{self.tax_type}, selling price: Kes.{self.marked_price}")
