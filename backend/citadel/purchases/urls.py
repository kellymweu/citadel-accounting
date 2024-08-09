from django.urls import path
from .views import PurchaseListCreateView, PurchaseDetailView, SupplierListCreateView, SupplierDetailView

urlpatterns = [
    path('purchases/', PurchaseListCreateView.as_view(), name='purchase-list-create'),
    path('purchases/<int:pk>/', PurchaseDetailView.as_view(), name='purchase-detail'),
    path('suppliers/', SupplierListCreateView.as_view(), name='supplier-list-create'),
    path('suppliers/<int:pk>/', SupplierDetailView.as_view(), name='supplier-detail'),
]
