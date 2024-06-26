from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("items", views.items, name="Items"),
    path("items/<str:pk>", views.item, name="Item"),
    path("purchases", views.purchases, name="Purchases"),
    path("purchases/<str:pk>", views.purchase, name="Purchase"),
    path("sales", views.sales, name="Sales"),
    path("sales/<str:pk>", views.sale, name="Sale"),
]
