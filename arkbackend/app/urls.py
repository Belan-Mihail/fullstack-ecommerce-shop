
from django.urls import path
from app import views


urlpatterns = [

    path('', views.getRoutes, name='getRoutes' ),
    path('products/', views.getProducts, name='getProducts' ),
    path('products/<str:pk>', views.getProduct, name='getProduct' ),
]

# 28 path('products/', views.getProducts, name='getProducts' ), - go views
# 34 app getProduct path go to views