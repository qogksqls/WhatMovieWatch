from rest_framework import serializers
from django.contrib.auth import get_user_model

from .models import Movie

User = get_user_model()

class MovieSerializer(serializers.ModelSerializer):

    class Meta:
        model: Movie
        fields: ('title', 'overview', )
        