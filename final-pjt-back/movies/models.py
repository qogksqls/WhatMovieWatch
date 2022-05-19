# Create your models here.
from django.db import models
from django.forms import FloatField, IntegerField
from django.conf import settings

class Movie(models.Model):
    title = models.TextField()
    original_title = models.TextField()
    overview = models.TextField()
    poster_path = models.TextField()
    vote_average = FloatField()
    vote_count = IntegerField()
    release_date = models.TextField()
    runtime = models.IntegerField()
    popularity = models.FloatField()
    adult = models.BooleanField()
    like_users = models.IntegerField()
    genre = models.IntegerField()



# readme 최종 3페이지에 B-ii => 로그인 된 유저는 영화에 대한 평점 등록/수정/삭제 등을 할 수 있어야 함.
# 영화 상세 페이지 하단에 평점과(드롭다운?) 댓글 형식으로 구현하는 방식 생각 중!
# 코드 수정해야됨.

# class Comment(models.Model):
#     user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='comments')
#     article = models.ForeignKey(Movie, on_delete=models.CASCADE, related_name='comments')
#     content = models.CharField(max_length=200)
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)
