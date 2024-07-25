from rest_framework import generics
from .models import Item
from .serializers import ItemSerializer
from rest_framework.permissions import IsAuthenticated

class ItemListCreateView(generics.ListCreateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class ItemDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
