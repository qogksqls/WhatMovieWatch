# 0520
## Back-end
- `accounts` 앱 구현
  - User 등록 가능
- `articles` 앱 구현
  - 모델링
```python
class Article(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='articles')
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    like_users = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='like_articles')


class Comment(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='comments')
    article = models.ForeignKey(Article, on_delete=models.CASCADE, related_name='comments')
    content = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
```
- `movies` 앱은 아직 미완

## Front-end
- 로그인한 User들 끼리 영화 정보를 소통하는 커뮤니티 구현
- 로그인을 해야만 글 조회/생성 가능하고, 작성자 본인만 수정/삭제 가능
- User는 게시글에 댓글 달 수 있고, 작성자 본인만 수정/삭제 가능하게 설정

# 0523
## Back-end

## Front-end
- 게시글 및 댓글에 생성 및 수정 시각 정보 넣었지만, 둘 다 보이게 일단 표시
- 영화정보게시글(커뮤니티) 창을 다듬음
  - createArticle은 커뮤니티에서만 보이게 수정
  - css도 살짝 추가
    - article에 hover 설정하고 색도 입힘
    - 제목과 내용 글자 크기와 색 지정

# 0524
## Back-end

## Front-end

# 0525
## Back-end

## Front-end

# 0526
## Back-end

## Front-end