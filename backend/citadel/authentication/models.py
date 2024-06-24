from django.db import models

# Create your models here.
class Driver(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    Id_Card_Number = models.IntegerField