from django.urls import path 
from . import views

urlpatterns = [
    path('',views.dashboard),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('architecture/', views.architecture, name='architecture'),
    path('data/', views.data, name='data'),
    path('testing/', views.testing, name='testing'),
    path('models/', views.models, name='models'),
    path('team/', views.team, name='team'),
    
    
    path('dashboard/data', views.dashboard_data),
    
]