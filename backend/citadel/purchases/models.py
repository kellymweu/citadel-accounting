from django.db import models
from inventory.models import Item

class Purchase(models.Model):
    TAX_TYPES = [
        ("16% VAT", "16% VAT"),
        ("EXEMPT", "EXEMPT"),
        ("2% CATERING", "2% CATERING LEVY"),
        ("14% VAT", "14% VAT"),
    ]

    supplier_name = models.CharField(max_length=100)
    purchase_date = models.DateTimeField()
    purchase_quantity = models.IntegerField()
    invoice_number = models.CharField(max_length=100, unique=True)  # Ensuring unique invoice numbers
    item = models.ForeignKey(Item, on_delete=models.CASCADE)  # Renamed for clarity
    purchase_price = models.DecimalField(max_digits=10, decimal_places=2)  # Using DecimalField for currency
    tax_type = models.CharField(max_length=20, choices=TAX_TYPES)
    sub_total = models.DecimalField(max_digits=10, decimal_places=2, editable=False, default=0.00)  # Calculated field
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        self.sub_total = self.purchase_quantity * self.purchase_price
        super().save(*args, **kwargs)

    def __str__(self):
        return (f"ID: {self.id}, Supplier: {self.supplier_name}, Item: {self.item.item_name}, "
                f"Purchase Date: {self.purchase_date}, Quantity: {self.purchase_quantity}, "
                f"Invoice Number: {self.invoice_number}, Tax: {self.tax_type}, "
                f"Purchase Price: Kes.{self.purchase_price}, Sub Total: Kes.{self.sub_total}")

class Supplier(models.Model):
    name = models.CharField(max_length=100, unique=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name