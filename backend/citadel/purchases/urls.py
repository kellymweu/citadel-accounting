from django.urls import path
from .views import PurchaseListCreateView, PurchaseDetailView, SupplierListCreateView, SupplierDetailView

urlpatterns = [
    path('purchases/', PurchaseListCreateView.as_view(), name='invoice-list-create'),
    path('purchases/<int:pk>/', PurchaseDetailView.as_view(), name='employee-detail'),
    path('suppliers/', SupplierListCreateView.as_view(), name='payroll-list-create'),
    path('suppliers/<int:pk>/', SupplierDetailView.as_view(), name='payroll-detail'),
]
