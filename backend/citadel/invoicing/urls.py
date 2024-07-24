from django.urls import path
from .views import InvoiceListCreateView, InvoiceItemDetailView, CustomerListCreateView, CustomerDetailView

urlpatterns = [
    path('invoices/', InvoiceListCreateView.as_view(), name='invoice-list-create'),
    path('invoices/<int:pk>/', InvoiceItemDetailView.as_view(), name='employee-detail'),
    path('customers/', CustomerListCreateView.as_view(), name='payroll-list-create'),
    path('customers/<int:pk>/', CustomerDetailView.as_view(), name='payroll-detail'),
]
