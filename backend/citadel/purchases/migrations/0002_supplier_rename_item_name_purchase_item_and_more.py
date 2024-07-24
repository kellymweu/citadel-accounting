# Generated by Django 5.0.6 on 2024-07-24 12:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('purchases', '0001_initial'),
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
            ],
        ),
        migrations.RenameField(
            model_name='purchase',
            old_name='item_name',
            new_name='item',
        ),
        migrations.AddField(
            model_name='purchase',
            name='purchase_price',
            field=models.DecimalField(decimal_places=2, default=1.0, max_digits=10),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='purchase',
            name='purchase_quantity',
            field=models.IntegerField(default=1.0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='purchase',
            name='sub_total',
            field=models.DecimalField(decimal_places=2, default=1.0, editable=False, max_digits=10),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='purchase',
            name='invoice_number',
            field=models.CharField(max_length=100, unique=True),
        ),
    ]
