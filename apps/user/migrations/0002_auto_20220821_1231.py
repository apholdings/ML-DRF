# Generated by Django 3.2.15 on 2022-08-21 17:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='useraccount',
            name='comprado',
            field=models.BooleanField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='useraccount',
            name='edad',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='useraccount',
            name='pais',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='useraccount',
            name='salario',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
