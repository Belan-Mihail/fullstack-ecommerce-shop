
from django.urls import path
from app import views

urlpatterns = [

    path('', views.getRoutes, name='getRoutes' ),
    path('products/', views.getProducts, name='getProducts' ),
]

# 28 path('products/', views.getProducts, name='getProducts' ), - go views 