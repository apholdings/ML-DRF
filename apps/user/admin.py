from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from . import models
# Register your models here.

@admin.register(models.UserAccount)
class PostAdmin(ImportExportModelAdmin):
    list_display = ('account','username', 'verified', 'is_staff')
    search_fields = ('account','username', )