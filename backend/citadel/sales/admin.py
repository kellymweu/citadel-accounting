from django.contrib import admin
from .models import *

class SaleAdmin(admin.ModelAdmin):
    readonly_fields = ('sub_total',)

admin.site.register(Sale, SaleAdmin)