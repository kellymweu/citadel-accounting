from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from rest_framework.response import Response
from .models import *
from rest_framework.decorators import api_view
from .serializers import *
from accounting import serializers

# Create your views here.
def index(request):
    items = Item.objects.all()
    context = {'items': items}
    return HttpResponse("Hello, world. You're at accounting index")

@api_view(['GET', 'POST']) #@api_view() is a decorator
#this function gets all items in the model Item
def items(request):
    #we are serializing data
    if request.method == 'GET':
        items = Item.objects.all()
        serializer = ItemSerializer(items, many=True)
        return Response(serializer.data)
    
    #we are de-serializing data here
    if request.method == 'POST':
        serializer = ItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

#this function gets a single item in the model Item
@api_view()
def item(request, pk):
    item = get_object_or_404(Item, item_name=pk)
    #item = Item.objects.get(id=pk)
    serializer = ItemSerializer(item)
    return Response(serializer.data)

@api_view()
def purchases(request):
    purchases = Purchase.objects.all()
    serializer = PurchaseSerializer(purchases, many=True)
    return Response(serializer.data)

@api_view()
def purchase(request, pk):
    purchase = get_object_or_404(purchase, purchase_id=pk)
    serializer = PurchaseSerializer(purchase)
    return Response(serializer.data)

@api_view()
def sales(request):
    sales = Sale.objects.all()
    serializer = SaleSerializer(sales, many=True)
    return Response(serializer.data)

@api_view()
def sale(request, pk):
    sale = get_object_or_404(sale, sale_id=pk)
    serializer = SaleSerializer(sale)
    return Response(serializer.data)