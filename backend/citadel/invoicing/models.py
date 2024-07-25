from django.db import models
from inventory.models import Item  
from django.utils.timezone import now

# Create your models here.
class Customer(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class Invoice(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    invoice_number = models.CharField(max_length=20, unique=True)
    date = models.DateField(auto_now_add=True)
    due_date = models.DateField()
    total_amount = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    paid = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Invoice {self.invoice_number} for {self.customer}"
    
    def save(self, *args, **kwargs):
        if not self.invoice_number:
            current_date = now()
            prefix = current_date.strftime("%y%m")
            #prefix = f"{current_date.year % 100}{current_date.month:02d}"  # YYMM
            last_invoice = Invoice.objects.filter(invoice_number__startswith=prefix).order_by('invoice_number').last()

            if last_invoice:
                last_number = int(last_invoice.invoice_number[4:])  # Get the last number part of the invoice
                new_number = last_number + 1
            else:
                new_number = 1
            
            self.invoice_number = f"{prefix}{new_number:04d}"  # Format as YYMMNNNN (4-digit number)

        super().save(*args, **kwargs)


class InvoiceItem(models.Model):
    invoice = models.ForeignKey(Invoice, related_name='items', on_delete=models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    description = models.TextField(blank=True, null=True)
    quantity = models.PositiveIntegerField()
    unit_price = models.DecimalField(max_digits=10, decimal_places=2)
    tax_type = models.CharField(max_length=20, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.item_name} (Invoice {self.invoice.invoice_number})"

    def get_total_price(self):
        return self.quantity * self.unit_price








