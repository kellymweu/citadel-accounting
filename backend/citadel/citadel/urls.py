from django.contrib import admin
from django.urls import path, include
from authentication import views

urlpatterns = [
    path("authentication/", include("authentication.urls")),
    path('admin/', admin.site.urls),
]
