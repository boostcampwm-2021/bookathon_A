# 주제
- 개발자 직무별 MBTI (17번)

# 프로젝트명
저는 undefined 개발자입니다.

# 소개
여러개의 질문을 통해 개발 초심자에게 잘 맞는 개발 직무 분야를 골라주고, 해당 분야에 대한 간단한 소개를 통해 이해를 돕는다.

# 팀원 소개
1. J010_권윤영 - 입장(FE)(1일차), 마지막 페이지(FE)(1일차), 서버 올리기(BE)(2일차)
2. J075_문상혁 - 질문 페이지 작성
3. J182_전용후 - FE boilerplate 작성, BE HTTP API 구현, FE 보조
4. J208_최인규 - 이벤트 붙이기(애니메이션, CSS 등?)

# 기획
## 1. 폴더 구조
```
├── config
│   └── database.js
├── public
│   ├── images
│   └── javascripts
│       ├── main.js
│       ├── store.js
│       ├── question 
│       │   ├── render-question.js
│       │   └── question.js
│       └── result
│           ├── render-result.js
│           └── result.js
├── stylesheets
│   ├── css
│   │   └── style.css
│   └── scss
│       └── style.scss
├── routes
│   └── index.js
└── views
    └── index.html
``` 

## 2. 디자인
- 입장 페이지
https://www.asciiart.eu/computers/computers   
- 질문   
![](https://i.imgur.com/0tm5FOe.png)    
- font
https://futurecreator.github.io/2018/11/12/my-best-programming-font-top-3/   

# 사용 기술
- SPA
- express
- scss/sass
- nedb

# 질문
자체 제작

# 결과
- 질문 응답 내용을 통해 선별된 하나의 직무 분야를 보여준다.
- 선택된 하나의 직무 분야에 대한 간단한 설명과, 관련 프레임워크와 언어, 이해를 돕기 위해 유명한 서비스를 소개한다.
