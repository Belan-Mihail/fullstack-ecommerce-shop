from django.shortcuts import render
from django.http import JsonResponse
from .products import products
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.
# def getRoutes(request):
#     return JsonResponse("Hello", safe=False)

@api_view(['GET'])
def getRoutes(request):
    return Response("Hello")

# def getProducts(request):
#     return JsonResponse(products, safe=False)

@api_view(['GET'])
def getProducts(request):
    return Response(products)

@api_view(['GET'])
def getProduct(request, pk):
    product = None
    for i in products:
        if i['_id'] == pk:
            product = i
            break
    return Response(product)

# 29 getProducts - go arkfrontend urls
# 31 from rest_framework.decorators import api_view  and from rest_framework.response import Response
# 32 edit def getRoutes and python manage.py migrate
# 33 edit get Products and go to urls.py
# 35 add get Product function than go to frontend terminal and install axios and go HomeScreen