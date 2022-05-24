# from django.db import models
# from django.conf import settings
# from django.core.validators import MaxValueValidator, MinValueValidator

# class Genre(models.Model):
#     name = models.TextField()

# class Movie(models.Model):
#     title = models.CharField(max_length=50)
#     popularity = models.FloatField()
#     genre_ids = models.ManyToManyField(Genre, related_name='movie_genre')
#     release_date = models.DateField()
#     vote_average = models.IntegerField()
#     vote_count = models.IntegerField()
#     overview = models.TextField()
#     poster_path = models.TextField()

# class Rating(models.Model):
#     user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='ratings')
#     movie = models.ForeignKey(Movie, on_delete=models.CASCADE, related_name='ratings')
#     rates = models.PositiveIntegerField(default=10, validators=[MinValueValidator(1), MaxValueValidator(10)])

from django.conf import settings
from django.db import models


# Create your models here.
class Genre(models.Model):
    name = models.CharField(max_length=50)
    like_users = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='like_genres')

class Movie(models.Model):
    like_users = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='like_movies')
    genre_ids = models.ManyToManyField(Genre)

    poster_path = models.CharField(max_length=200, blank=True, null=True)
    adult = models.BooleanField(null=True)
    overview = models.TextField(null=True, blank=True)
    release_date = models.DateField(null=True, blank=True)
    original_title = models.CharField(null=True, max_length=100)
    original_language = models.CharField(null=True, max_length=100)
    title = models.CharField(max_length=100)
    popularity = models.FloatField(null=True, blank=True)
    vote_count = models.IntegerField(null=True, blank=True)
    vote_average = models.FloatField(null=True, blank=True)