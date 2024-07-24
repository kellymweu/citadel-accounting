from django.urls import path
from .views import EmployeeListCreateView, EmployeeDetailView, PayrollListCreateView, PayrollDetailView

urlpatterns = [
    path('employees/', EmployeeListCreateView.as_view(), name='employee-list-create'),
    path('employees/<int:pk>/', EmployeeDetailView.as_view(), name='employee-detail'),
    path('payrolls/', PayrollListCreateView.as_view(), name='payroll-list-create'),
    path('payrolls/<int:pk>/', PayrollDetailView.as_view(), name='payroll-detail'),
]
