from django.db import models

# Create your models here.
class PreProcesamiento(models.Model):
    pais = models.CharField(max_length=255, blank=True, null=True)
    edad = models.IntegerField(blank=True, null=True)
    salario = models.IntegerField(blank=True, null=True)
    comprado = models.BooleanField(blank=True, null=True)


class RegresionLinealSimple(models.Model):
    experiencia = models.IntegerField(blank=True, null=True)
    salario = models.IntegerField(blank=True, null=True)