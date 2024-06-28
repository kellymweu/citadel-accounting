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
    #item_id = models.IntegerField(primary_key=True, unique=True)
    item_name = models.CharField(max_length=50)
    tax_type = models.CharField(max_length=20, choices=TAX_TYPES)
    SKU = models.CharField(max_length=10, unique=True)
    marked_price = models.CharField(max_length=50, blank=True)

    #This is a string representation of all Item Objects
    def __str__(self):
        return(f"ID:{self.id}, item_name:{self.item_name}, tax_type:{self.tax_type}, selling price: Kes.{self.marked_price}")


class Purchase(models.Model):
    TAX_TYPES = [
        ("16% VAT", "16% VAT"),
        ("EXEMPT" , "EXEMPT"),
        ("2% CATERING" , "2% CATERING LEVY"),
        ("14% VAT" , "14% VAT"),
    ]
    #purchase_id = models.IntegerField(primary_key=True, unique=True)
    supplier_name = models.CharField(max_length=100)
    purchase_date = models.DateTimeField(auto_now=False, auto_now_add=False)
    purchase_quantity = models.IntegerField
    invoice_number = models.CharField(max_length=100)
    item_name = models.ForeignKey(Item, on_delete=models.CASCADE)
    purchase_price = models.IntegerField
    tax_type = models.CharField(max_length=20, choices=TAX_TYPES)
    sub_total = models.IntegerField

#This is a string representation of all Purchase Objects
    def __str__(self):
        return(f"ID:{self.id}, supplier_name:{self.supplier_name},item_name:{self.item_name}, purchase_date:{self.purchase_date},purchase_quantity:{self.purchase_quantity},invoice_number:{self.invoice_number}, tax:{self.tax_type}, purchase_price: Kes.{self.purchase_price}, sub_total:{self.sub_total}")



class Sale(models.Model):
    TAX_TYPES = [
        ("16% VAT", "16% VAT"),
        ("EXEMPT" , "EXEMPT"),
        ("2% CATERING" , "2% CATERING LEVY"),
        ("14% VAT" , "14% VAT"),
    ]
    #sale_id = models.IntegerField(primary_key=True, unique=True)
    item_name = models.ForeignKey(Item, on_delete=models.CASCADE)
    sale_quantity = models.IntegerField
    #sale_date = models.DateTimeField(auto_now=False, auto_now_add=True)
    selling_price = models.IntegerField
    tax_type = models.CharField(max_length=20, choices=TAX_TYPES)
    sub_total = models.IntegerField

#This is a string representation of all Sale Objects
    def __str__(self):
        return(f"ID:{self.id}, item_name:{self.item_name},sale_quantity:{self.sale_quantity}, tax:{self.tax_type}, selling price: Kes.{self.selling_price},sub total:{self.sub_total}")

 #sale_date:{self.sale_date},invoice_number:{self.invoice_number},