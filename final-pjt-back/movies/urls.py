from django.urls import path
from . import views

app_name = 'movies'

urlpatterns = [
    # movies
    path('', views.home),
    path('<int:movie_pk>/', views.movie_detail),
    # reviews
    path('<int:movie_pk>/reviews/', views.create_review),
    path('<int:movie_pk>/reviews/<int:review_pk>/', views.review_update_or_delete)

    # path('random/', views.random),
    # path('genres/', views.genres),
    # path('recommend/', views.recommend),
]