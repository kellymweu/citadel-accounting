# Generated by Django 5.0.6 on 2024-08-09 07:03

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inventory', '0002_item_purchase_price_alter_item_item_name'),
        ('purchases', '0002_alter_purchase_purchase_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='purchase',
            name='item',
        ),
        migrations.RemoveField(
            model_name='purchase',
            name='purchase_price',
        ),
        migrations.RemoveField(
            model_name='purchase',
            name='purchase_quantity',
        ),
        migrations.CreateModel(
            name='PurchaseItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('purchase_quantity', models.IntegerField()),
                ('purchase_price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='inventory.item')),
                ('purchase', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='purchases.purchase')),
            ],
        ),
    ]