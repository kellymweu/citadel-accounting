# Generated by Django 5.0.6 on 2024-07-25 17:41

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('inventory', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Supplier',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True)),
                ('phone_number', models.CharField(blank=True, max_length=15, null=True)),
                ('email', models.EmailField(blank=True, max_length=254, null=True)),
                ('address', models.TextField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Purchase',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('supplier_name', models.CharField(max_length=100)),
                ('purchase_date', models.DateTimeField()),
                ('purchase_quantity', models.IntegerField()),
                ('invoice_number', models.CharField(max_length=100, unique=True)),
                ('purchase_price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('tax_type', models.CharField(choices=[('16% VAT', '16% VAT'), ('EXEMPT', 'EXEMPT'), ('2% CATERING', '2% CATERING LEVY'), ('14% VAT', '14% VAT')], max_length=20)),
                ('sub_total', models.DecimalField(decimal_places=2, default=0.0, editable=False, max_digits=10)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='inventory.item')),
            ],
        ),
    ]
