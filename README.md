# 와와학습코칭센터 사이트

탭 세 개(메인, 학습정보, 전국지점)로 된 사이트입니다.
**관리자 화면(/admin/)에서 글을 쓰고 발행 버튼만 누르면** 깃허브에 저장되고 Netlify가 사이트를 다시 만듭니다.
결과물은 페이지마다 완성된 HTML 파일이라 네이버 검색로봇이 그대로 읽습니다.

---

## 1. 처음 한 번만 하는 설정

### ① 파일 두 곳 고치기

| 파일 | 고칠 곳 |
| --- | --- |
| `src/admin/config.yml` | `repo: 깃허브아이디/저장소이름` 한 줄, `site_url` 두 줄 |
| `src/robots.txt` | `https://OO.netlify.app` 을 실제 주소로 |

나머지 사이트 정보(대표 전화, 소개 문장, 네이버 인증 코드 등)는 나중에 관리자 화면 **사이트 설정**에서 고칠 수 있습니다.

### ② 깃허브에 올리고 Netlify에 연결

1. 이 폴더 안의 파일을 새 깃허브 저장소에 올립니다
2. Netlify → **Add new project → Import an existing project → GitHub** → 저장소 선택
3. 빌드 설정은 `netlify.toml`에서 자동으로 잡힙니다 (Build `npm run build`, Publish `_site`)
4. 배포 주소가 나오면 ①의 주소들을 그 주소로 바꾸고 다시 올립니다

### ③ 관리자 모드 켜기 (GitHub 로그인 연결)

관리자 화면은 GitHub 계정으로 로그인합니다. 연결을 한 번 해 두어야 합니다.

**깃허브에서**
1. GitHub → 오른쪽 위 프로필 → **Settings → Developer settings → OAuth Apps → New OAuth App**
2. 이렇게 채웁니다

| 칸 | 값 |
| --- | --- |
| Application name | 와와 관리자 (아무 이름) |
| Homepage URL | `https://내사이트.netlify.app` |
| Authorization callback URL | `https://api.netlify.com/auth/done` |

3. **Register application** → **Generate a new client secret**
4. 화면의 **Client ID**와 **Client secret**을 복사해 둡니다 (secret은 한 번만 보입니다)

**Netlify에서**
5. 해당 사이트 → **Project configuration → Access & security → OAuth**
6. **Install provider** → GitHub 선택 → 복사한 Client ID와 secret 붙여넣기

**확인**
7. `https://내사이트.netlify.app/admin/` 접속 → **GitHub로 로그인** → 권한 허용

> 저장소에 쓰기 권한이 있는 GitHub 계정만 로그인할 수 있습니다. 다른 사람에게 글쓰기를 맡기려면 저장소 **Settings → Collaborators**에 그 사람의 GitHub 계정을 추가하세요.

---

## 2. 글 발행하기

### 관리자 화면에서 (권장)

`/admin/` 에 들어가면 왼쪽에 세 가지가 보입니다.

| 메뉴 | 하는 일 |
| --- | --- |
| **학습정보** | 블로그 글. 쓰면 `/info/글주소/` 로 발행됩니다 |
| **전국지점** | 지점 하나가 페이지 하나. 지역을 고르면 지역 목록·사이트맵에 자동으로 들어갑니다 |
| **사이트 설정** | 대표 전화, 소개 문장, 네이버 인증 코드, 자주 묻는 질문 |

**새 글 흐름**
1. 학습정보 → **새 학습정보 글**
2. 제목, 글 주소(영문), 요약, 주제, 본문을 씁니다. 사진은 끌어다 놓으면 올라갑니다
3. **저장** → 글이 '초안'이 됩니다. 이때는 실제 사이트에 안 보입니다
4. 위쪽 **상태 → 발행 준비**로 바꾼 뒤 **발행 → 지금 발행**
5. 1~2분 뒤 사이트에 나타납니다

위쪽 **작업 흐름** 메뉴에서 초안, 검토 중, 발행 준비 상태의 글을 한눈에 볼 수 있습니다.

> **크레딧 아끼는 법.** Netlify는 실제 사이트에 배포할 때마다 15크레딧을 씁니다. 초안 저장은 미리보기로만 만들어져 크레딧이 들지 않고, **발행을 누를 때만** 한 번 씁니다. 글 여러 편을 초안으로 써 두고 한꺼번에 발행하면 더 아낄 수 있습니다.

### 파일로 직접 (컴퓨터에서)

```bash
# 학습정보
src/info/posts/글-주소.md
# 전국지점
src/branches/posts/지점-주소.md
```

기존 파일 하나를 복사해서 머리말(`---` 사이)과 본문만 바꾸고 올리면 됩니다.

---

## 3. 전국지점 등록 요령

**지역**을 고르면 이렇게 자동으로 연결됩니다.

- 지점 페이지: `/branches/busan/haeundae/`
- 지역 목록: `/branches/busan/`
- 지역별 사이트맵: `/sitemaps/branches-busan.xml`
- 메인의 '가까운 센터 찾기'와 상담 신청 폼의 센터 선택칸

**담당 학교**에 학교 이름과 **다음 시험 날짜**를 넣으면 지점 페이지에 D-day가 자동으로 뜨고, 4주 안으로 다가오면 오렌지색으로 바뀝니다. 시험이 끝나면 다음 시험 날짜로만 바꿔 주세요.

**센터 소개**에는 원장님 인사, 실제 교실 사진, 그 동네 학교 이야기처럼 그 센터만 쓸 수 있는 내용을 넣어 주세요. 지점 페이지끼리 문장이 비슷하면 검색엔진이 같은 문서로 보고 몇 개만 노출합니다.

**학원명, 등록번호, 교습비 게시표**는 학원 광고에 표시해야 하는 항목입니다. 교육청 등록 내용 그대로 넣어 주세요.

> 예시 지점 3곳(예시A점, 예시B점, 예시C점)은 화면 확인용입니다. 실제 지점을 등록한 뒤 관리자 화면에서 지워 주세요.

---

## 4. 네이버 서치어드바이저 연동

1. [searchadvisor.naver.com](https://searchadvisor.naver.com) → 웹마스터 도구 → 사이트 등록
2. 소유확인 → **HTML 태그** → `content="..."` 안의 값만 복사
3. 관리자 화면 → **사이트 설정 → 기본 정보 → 네이버 소유확인 코드**에 붙여넣고 발행
4. 배포가 끝나면 서치어드바이저에서 **소유확인**
5. **요청 → 사이트맵 제출**: `sitemap.xml`
6. **요청 → RSS 제출**: `rss.xml`

| 파일 | 내용 |
| --- | --- |
| `/sitemap.xml` | 전체 주소 한 파일. **네이버에는 이것을 제출** |
| `/sitemap-index.xml` | 지역별 사이트맵 묶음. 구글 서치콘솔용 |
| `/sitemaps/branches-지역.xml` | 지역 하나의 지점만 |
| `/sitemap/` | 사람이 보는 사이트맵 페이지 |
| `/rss.xml` | 학습정보와 지점 새 글 |

모두 발행할 때마다 자동으로 갱신됩니다. 새 글을 빨리 노출시키고 싶으면 **요청 → 웹페이지 수집**에 글 주소를 직접 넣으세요.

---

## 5. 상담 신청 받기

Netlify Forms로 동작합니다. 첫 배포 후 Netlify의 **Forms** 메뉴에 `consult` 폼이 생깁니다.
**Forms → Form notifications → Email notification**을 켜 두면 신청이 들어올 때마다 메일로 옵니다.
메인에서 신청하면 고른 센터 이름이, 지점 페이지에서 신청하면 그 지점 이름이 함께 들어옵니다.

---

## 6. 내 컴퓨터에서 미리 보기 (선택)

```bash
npm install
npm run dev     # http://localhost:8080
```

---

## 폴더 구조

```
src/
├── _data/            사이트 설정, 지역 목록, 자주 묻는 질문
├── _includes/        공통 뼈대, 학습정보 글, 지점 페이지, 상담 폼
├── index.njk         메인
├── info/             학습정보 목록 · 주제별 · 글(posts/)
├── branches/         전국지점 목록 · 지역별 · 지점(posts/)
├── admin/            관리자 화면
├── sitemaps/  sitemap.njk  sitemap/  rss.njk  robots.txt
└── assets/           CSS, JS, 이미지 (관리자에서 올린 사진은 img/uploads/)
```
