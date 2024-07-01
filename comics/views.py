from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'index.html')

def nosotros(request):
    return render(request, 'nosotros.html')

def productos(request):
    return render(request, 'productos.html')

def registro(request):
    return render(request, 'registro.html')

def iniciar(request):
    return render(request, 'iniciar.html')

def carrito(request):
    return render(request, 'carrito.html')

def personajes(request):
    return render(request, 'personajes.html')

#comic

def joker(request):
    return render(request, 'joker.html')

def naruto(request):
    return render(request, 'naruto.html')

def onepiece(request):
    return render(request, 'onepiece.html')

def superman(request):
    return render(request, 'superman.html')