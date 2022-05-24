from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Movie, Genre

User = get_user_model()

class GenreSerializer(serializers.ModelSerializer):

    class Meta:
        model = Genre
        fields = ('id', 'name',)

class MovieSerializer(serializers.ModelSerializer):

    # class UserSerializer(serializers.ModelSerializer):
    #     class Meta:
    #         model = User
    #         fields = ('pk', 'username')

    # comments = CommentSerializer(many=True, read_only=True)
    # user = UserSerializer(read_only=True)
    # like_users = UserSerializer(read_only=True, many=True)

    class Meta:
        model = Movie
        fields = ('id', 'title', 'poster_path', 'genre_ids')

class MovieRandomSerializer(serializers.ModelSerializer):

    class Meta:
        model = Movie
        fields = ('id', 'title', 'poster_path', 'genre_ids')