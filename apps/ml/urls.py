from django.urls import path

from .views import *


urlpatterns = [
    path('pre-procesamiento', PreProcesamientoView.as_view()),
    path('regresion-lineal', RegresionLinealView.as_view())
]

