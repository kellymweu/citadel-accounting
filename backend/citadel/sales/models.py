from django.db import models
from inventory.models import Item
from invoicing.models import Customer  # Import the Customer model

class Sale(models.Model):
    TAX_TYPES = [
        ("16% VAT", "16% VAT"),
        ("EXEMPT", "EXEMPT"),
        ("2% CATERING", "2% CATERING LEVY"),
        ("14% VAT", "14% VAT"),
    ]

    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)  # Link to Customer model
    sale_date = models.DateTimeField(auto_now_add=True)
    sale_quantity = models.IntegerField()
    selling_price = models.DecimalField(max_digits=10, decimal_places=2)
    tax_type = models.CharField(max_length=20, choices=TAX_TYPES)
    sub_total = models.DecimalField(max_digits=10, decimal_places=2, editable=False)

    def save(self, *args, **kwargs):
        self.sub_total = self.sale_quantity * self.selling_price
        super().save(*args, **kwargs)

    def __str__(self):
        return (f"ID: {self.id}, Item: {self.item.item_name}, Customer: {self.customer}, "
                f"Sale Quantity: {self.sale_quantity}, Sale Date: {self.sale_date}, "
                f"Selling Price: Kes.{self.selling_price}, Tax: {self.tax_type}, "
                f"Sub Total: Kes.{self.sub_total}")
