from django.shortcuts import render
from django.http import HttpResponse
from .models import *
from rest_framework.decorators import api_view
from .serializers import *


# Create your views here.
def index(request):
    items = Item.objects.all()
    context = {'items': items}
    return HttpResponse("Hello, world. You're at accounting index")

