from django.db import models
from django.utils import timezone
from inventory.models import Item
from invoicing.models import Customer  # Import the Customer model

class Sale(models.Model):
    TAX_TYPES = [
        ("16% VAT", "16% VAT"),
        ("EXEMPT", "EXEMPT"),
        ("2% CATERING", "2% CATERING LEVY"),
        ("14% VAT", "14% VAT"),
    ]

    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)  # Non-nullable field
    sale_date = models.DateField(default=timezone.now)
    tax_type = models.CharField(max_length=20, choices=TAX_TYPES)
    sub_total = models.DecimalField(max_digits=10, decimal_places=2, editable=False, default=0.00)  # Calculated field
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        self.sub_total = sum(item.sub_total for item in self.saleitem_set.all())
        super().save(*args, **kwargs)

    def __str__(self):
        return (f"ID: {self.id}, Customer: {self.customer}, "
                f"Sale Date: {self.sale_date}, "
                f"Tax: {self.tax_type}, "
                f"Sub Total: Kes.{self.sub_total}")

class SaleItem(models.Model):
    sale = models.ForeignKey(Sale, on_delete=models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    sale_quantity = models.IntegerField()
    selling_price = models.DecimalField(max_digits=10, decimal_places=2)

    @property
    def sub_total(self):
        return self.sale_quantity * self.selling_price

    def __str__(self):
        return (f"Sale: {self.sale.id}, Item: {self.item.item_name}, "
                f"Quantity: {self.sale_quantity}, Price: Kes.{self.selling_price}, "
                f"Sub Total: Kes.{self.sub_total}")
