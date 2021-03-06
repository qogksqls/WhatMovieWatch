# What movie will you watch?

> 2022.05.20 ~ 2022.05.26

## 멤버
- 배한빈: 프론트앤드, 백앤드
- 오현규: 프론트앤드, 백앤드

## 기능
![영화추천웹사이트](https://user-images.githubusercontent.com/97646034/179394477-870a3488-4fb1-4dcb-8e26-4de9b7c53869.gif)
1. 영화 정보 제공 & 리뷰 등록
2. 커뮤니티 게시글 작성 & 댓글 등록
3. 영화 랜덤 추천 10선
4. 프로필 페이지에서 사용자가 작성한 게시글 확인 

## 일지
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
- 구글링과 다른 사람이 완성한 유사 프로젝트를 참고하여 API와 Django, Vue 연동하는 것에 도전했지만 실패.
- 완성된 유사 프로젝트의 코드를 복붙했는데 에러를 고칠수록 다른 에러가 나와서 다음에는 단순 복붙말고 TMDB를 Django에 연동시키는 것 부터 도전할 예정.
## Front-end
- 게시글 및 댓글에 생성 및 수정 시각 정보 넣었지만, 둘 다 보이게 일단 표시
- 영화정보게시글(커뮤니티) 창을 다듬음
  - createArticle은 커뮤니티에서만 보이게 수정
  - css도 살짝 추가
    - article에 hover 설정하고 색도 입힘
    - 제목과 내용 글자 크기와 색 지정

# 0524
## Back-end
- movie 정보들 json으로 받아서 loaddata로 DB 저장
- 프론트에서 로그인한 유저 판단하는거 넣었는데 백에 login_required 썼다가 충돌 오류난거 깨달아서 백에 있는 걸 삭제
## Front-end
- Home에서 Movie 데이터 50개를 출력
- 포스터 클릭하면 detail 페이지로 넘어가 영화 상세 정보 출력까지 구현

- 추가로, 서로 브랜치 꼬여서 충돌난거 고치려다가 gitlab에 있는 final 프로젝트 삭제하고 다시 remote 연결하려 했는데 그 과정에서 branch를 master로 바꿨다가 파일 다 날아간줄 알고 멘붕... 다시 쓰던 branch로 바꾸니 파일들 돌아옴. 천만다행...
# 0525
## Back-end
- 리뷰 관련한 서버 작업함, 모델링, 시리얼라이즈 등
- 랜덤으로 영화 10개를 뽑아내는 알고리즘 구현 후 front로 사진 파일 연동 시킴. 이후 사진 파일 누르면 각 영화 디테일 페이지로 넘어가는 기능 구현.

## Front-end
- 영화 디테일 뷰에서 리뷰 적을 수 있도록 설정. 유저들이 올린 리뷰들의 평점을 모아놓은 것도 하고 싶지만 참아야지.. 시간이 없다.
- 또한 커뮤니티 글과 댓글에서 수정 전 시간과 수정 후 시간을 구별하여 올려놓는 작업 완료
- home, 커뮤니티, 추천 알고리즘 페이지 css 적용
- 각종 페이지 글씨체, 마우스오버 기능 등 css와 bootstrap 이용하여 작업.

# 0526
## Back-end
- 마지막으로 안쓰는 필드나 함수들 삭제


## Front-end
- 전체적인 CSS 보강. 
- 평점 edit 가능하게 수정

- end
