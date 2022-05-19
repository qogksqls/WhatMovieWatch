from django.urls import path
from . import views

app_name = 'movies'

urlpatterns = [
    path('', views.index, name='index'),
    path('new/', views.new, name='new'),
    path('create/', views.create, name='create'),
    path('<int:pk>/', views.detail, name='detail'),
    path('<int:pk>/edit/', views.edit, name='edit'),
    path('<int:pk>/update/', views.update, name='update'),
    path('<int:pk>/delete/', views.delete, name='delete'),
]


# 위 코드는 5회 영화 관련 페어프로젝트 코드
# 밑 코드는 vue 실습 코드에 article의 좋아요/댓글 기능 대신 movie의 좋아요=>평점+댓글로 변형 예정.

# urlpatterns = [
#     # movies
#     path('', views.movie_list_or_create),
#     path('<int:movie_pk>/', views.movie_detail_or_update_or_delete),
#     path('<int:movie_pk>/like/', views.like_movie),
#     # comments
#     path('<int:article_pk>/comments/', views.create_comment),
#     path('<int:article_pk>/comments/<int:comment_pk>/', views.comment_update_or_delete)
# ]