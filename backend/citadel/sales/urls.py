
from django.urls import path
from .views import SaleListCreateView, SaleDetailView

urlpatterns = [
    path('sales/', SaleListCreateView.as_view(), name='invoice-list-create'),
    path('sales/<int:pk>/', SaleDetailView.as_view(), name='employee-detail'),
]
