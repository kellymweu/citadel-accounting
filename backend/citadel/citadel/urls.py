from django.contrib import admin
from django.urls import path, include
from authentication import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('invoicing/', include('invoicing.urls')),
    path('purchases/', include('purchases.urls')),
    path('sales/', include('sales.urls')),
    path('inventory/', include('inventory.urls')),
    path('expenses/', include('expenses.urls')),
    path('banking/', include('banking.urls')),
    path('payroll/', include('payroll.urls')),
    path("authentication/", include("authentication.urls")),
]