from django.urls import path
from . import views

urlpatterns = [  path('', views.index, name='index'), 
                 path('nosotros', views.nosotros, name='nosotros'),
                 path('productos', views.productos, name='productos'),
                 path('registro', views.registro, name='registro'),
                 path('iniciar', views.iniciar, name='iniciar'),
                 path('carrito', views.carrito, name='carrito'),
                 path('personajes', views.personajes, name='personajes'),

                 path('joker', views.joker, name='joker'),
                 path('naruto', views.naruto, name='naruto'),
                 path('onepiece', views.onepiece, name='onepiece'),
                 path('superman', views.superman, name='superman'),
                 ]