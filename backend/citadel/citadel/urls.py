from django.contrib import admin
from django.urls import path, include
from accounting import views
from authentication import views

urlpatterns = [
    path("accounting/", include("accounting.urls")),
    path("authentication/", include("authentication.urls")),
    path('admin/', admin.site.urls),

]
