from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
from .serializers import UserSerializer
from django.shortcuts import get_object_or_404
from django.core.exceptions import ValidationError
from django.http.response import HttpResponseBadRequest
from .models import UserAccount
# Create your views here.


class CreateUserProfileView(APIView):
    def post(self, request, format=None):
        data = self.request.data
        account = data["account"]
        user = UserAccount.objects.get_or_create(
            account=account,
            email=account,
            username=account,
        )
        return Response({'message': 'User Created'})


class DetailUserProfileView(APIView):
    def get(self,request,account,*args, **kwargs):
        user = UserAccount.objects.get(account=account)
        serializer = UserSerializer(user)
        return Response({
            'user':serializer.data
        },status=status.HTTP_200_OK)
