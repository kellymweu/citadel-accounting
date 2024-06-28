from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from rest_framework.response import Response
from .models import *
from rest_framework.decorators import api_view
from .serializers import *
from accounting import serializers
from rest_framework import status
from rest_framework.views import APIView #for class based views
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView #for generic views
from rest_framework.viewsets import ModelViewSet
from .filters import * 
from rest_framework.filters import SearchFilter 
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters
# Create your views here.

#------------------VIEWSETS----------------------
#queryset and serializer class need to be the same to use viewsets
class ItemsViewset(ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, filters.OrderingFilter]
    filterset_class = ItemFilter
    search_fields = ['item_name', 'SKU']


class PurchasesViewset(ModelViewSet):
    queryset = Purchase.objects.all()
    serializer_class = PurchaseSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ["supplier_name","invoice_number","item_name", "tax_type", "SKU", "marked_price"]

class SalesViewset(ModelViewSet):
    queryset = Sale.objects.all()
    serializer_class = SaleSerializer

'''------------------GENERIC VIEWS ----------------------

class ItemsApi(ListCreateAPIView):
    queryset = items = Item.objects.all()
    serializer_class = ItemSerializer

class ItemApi(RetrieveUpdateDestroyAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class PurchasesApi(ListCreateAPIView):
    queryset = purchases = Purchase.objects.all()
    serializer_class = PurchaseSerializer

class PurchaseApi(RetrieveUpdateDestroyAPIView):
    queryset = Purchase.objects.all()
    serializer_class = PurchaseSerializer

class SalesApi(ListCreateAPIView):
    queryset = sales = Sale.objects.all()
    serializer_class = SaleSerializer

class SaleApi(RetrieveUpdateDestroyAPIView):
    queryset = Sale.objects.all()
    serializer_class = SaleSerializer
'''



''' ------------------CLASS BASED VIEWS ----------------------

#Many Items
class ItemsApi(APIView):
    def get(self, request):
        items = Item.objects.all()
        serializer = ItemSerializer(items, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = ItemSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save() 
        return Response(serializer.data)
    
#One Item
class ItemApi(APIView):
    def get(self,request,pk):
        item = get_object_or_404(Item, id=pk)
        serializer = ItemSerializer(item)
        return Response(serializer.data)
    
    def put(self, request, pk):
        item = get_object_or_404(Item, id=pk)
        serializer = ItemSerializer(item, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    
    def delete(self, request):
        item = get_object_or_404
        item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

#Many Purchases
class PurchasesApi(APIView):
    def get(self, request):
        purchases = Purchase.objects.all()
        serializer = PurchaseSerializer(purchases, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = PurchaseSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

#One Purchase  
class PurchaseApi(APIView):
    def get(self, request, pk):
        purchase = get_object_or_404(Purchase, id=pk)
        serializer = PurchaseSerializer(purchase)
        return Response(serializer.data)
    
    def put(self, request, pk):
        purchase = get_object_or_404(Purchase, id=pk)
        serializer = PurchaseSerializer(purchase, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    
    def delete(self, request):
        purchase = get_object_or_404
        purchase.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

#Many Sales  
class SalesApi(APIView):
    def get(self, request):
        sales = Sale.objects.all()
        serializer = SaleSerializer(sales, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = SaleSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

#One Sale  
class SaleApi(APIView):
    def get(self, request, pk):
        sale = get_object_or_404(sale, id=pk)
        serializer = SaleSerializer(sale)
        return Response(serializer.data)
    
    def put(self, request, pk):
        sale = get_object_or_404(Purchase, id=pk)
        serializer = SaleSerializer(sale, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    
    def delete(self, request):
        sale = get_object_or_404
        sale.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
'''


'''------------------FUNCTION BASED VIEWS ----------------------
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
        serializer.is_valid(raise_exception=True)
        serializer.save() 
        # if serializer.is_valid():
        #     serializer.save()  
        # else:
        #     return Response(serializer.errors)
        
        return Response(serializer.data)

#this function gets a single item in the model Item
@api_view(['GET', 'PUT', 'DELETE'])
def item(request, pk):
    item = get_object_or_404(Item, id=pk)
    if request.method == 'GET':
        serializer = ItemSerializer(item)
        return Response(serializer.data)
    
    if request.method == 'PUT':
        serializer = ItemSerializer(item, data=request.data)
        if serializer.is_valid():
            serializer.save()
        else:
            return Response(serializer.errors)
        return Response(serializer.data)
    
    if request.method == 'DELETE':
        item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view()
def purchases(request):
    purchases = Purchase.objects.all()
    serializer = PurchaseSerializer(purchases, many=True)
    return Response(serializer.data)

@api_view()
def purchase(request, pk):
    purchase = get_object_or_404(purchase, id=pk)
    serializer = PurchaseSerializer(purchase)
    return Response(serializer.data)

@api_view()
def sales(request):
    sales = Sale.objects.all()
    serializer = SaleSerializer(sales, many=True)
    return Response(serializer.data)

@api_view()
def sale(request, pk):
    sale = get_object_or_404(sale, id=pk)
    serializer = SaleSerializer(sale)
    return Response(serializer.data)



def index(request):
    items = Item.objects.all()
    context = {'items': items}
    return HttpResponse("Hello, world. You're at accounting index")

'''