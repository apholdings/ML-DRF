from django.db import models
from django.conf import settings
import os

# Create your models here.
def user_profile_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<filename>
    profile_pic_name = 'users/{0}/profile.jpg'.format(instance.account)
    full_path = os.path.join(settings.MEDIA_ROOT, profile_pic_name)

    if os.path.exists(full_path):
    	os.remove(full_path)


def user_banner_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<filename>
    banner_pic_name = 'users/{0}/banner.jpg'.format(instance.account)
    full_path = os.path.join(settings.MEDIA_ROOT, banner_pic_name)

    if os.path.exists(full_path):
    	os.remove(full_path)


class UserAccount(models.Model):
    account = models.CharField(max_length=255, unique=True)

    username = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)

    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)

    verified = models.BooleanField(default=False)
    requested_verified = models.BooleanField(default=False)

    picture = models.ImageField(default='users/user_default_profile.png', upload_to=user_profile_directory_path, blank=True, null=True, verbose_name='Picture')
    banner = models.ImageField(default='users/user_default_bg.jpg', upload_to=user_banner_directory_path, blank=True, null=True, verbose_name='Banner')
    
    location = models.CharField(max_length=50, null=True, blank=True)
    url = models.CharField(max_length=80, null=True, blank=True)

    birthday = models.DateField(null=True, blank=True)
    profile_info = models.TextField(max_length=150, null=True, blank=True)

    date_created = models.DateTimeField(auto_now_add=True)

    pais = models.CharField(max_length=255, blank=True, null=True)
    edad = models.IntegerField(blank=True, null=True)
    salario = models.IntegerField(blank=True, null=True)
    experiencia = models.DecimalField(max_digits=3, decimal_places=2, blank=True, null=True)
    comprado = models.BooleanField(blank=True, null=True)

    def __str__(self):
        return self.account