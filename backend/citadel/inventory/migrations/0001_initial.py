# Generated by Django 5.0.6 on 2024-07-24 09:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('item_name', models.CharField(max_length=50)),
                ('tax_type', models.CharField(choices=[('16% VAT', '16% VAT'), ('EXEMPT', 'EXEMPT'), ('2% CATERING', '2% CATERING LEVY'), ('14% VAT', '14% VAT')], max_length=20)),
                ('SKU', models.CharField(max_length=10, unique=True)),
                ('marked_price', models.CharField(blank=True, max_length=50)),
            ],
        ),
    ]