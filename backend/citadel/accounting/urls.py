from django.urls import path
from . import views

urlpatterns = [
    #path("", views.index, name="index"),
    #path("items", views.items, name="Items"),
    path("items", views.ItemsApi.as_view(), name="Items"),
    #path("items/<str:pk>", views.item, name="Item"),
    path("items/<str:pk>", views.ItemApi.as_view(), name="Item"),
    #path("purchases", views.purchases, name="Purchases"),
    path("purchases", views.PurchasesApi.as_view(), name="Purchases"),
    #path("purchases/<str:pk>", views.purchase, name="Purchase"),
    path("purchases/<str:pk>", views.PurchasesApi.as_view(), name="Purchase"),
    #path("sales", views.sales, name="Sales"),
    path("sales", views.SalesApi.as_view(), name="Sales"),
    #path("sales/<str:pk>", views.sale, name="Sale"),
    path("sales/<str:pk>", views.SaleApi.as_view(), name="Sale"),
]
