# To Do List

## 최종 구현 화면 동영상 및 이미지

### 로그인/회원가입

   <img width="80%" src="https://user-images.githubusercontent.com/50974359/185641453-74a4ee59-3b2b-4f07-9c77-ee187644923f.gif"/>
   
   ### TodoList CRUD
   <img width="80%" src="https://user-images.githubusercontent.com/50974359/185644419-a0ddd8c4-4c8b-4c46-904f-8adbfcb30721.gif"/>
   
   ### TodoList 기능별 구분
   <img width="80%" src="https://user-images.githubusercontent.com/50974359/185644535-39384b2c-31ee-4a55-9f3b-a24f2b3be88a.png"/>

## 설치, 환경설정 및 실행 방법

- port:3000

      - npm start

## 구현 요구 사항 목록

# Login / SignUp

1. /auth 경로에 로그인/회원가입 기능 개발

   - [x] 두 기능을 별도의 경로로 구분해도 됨
   - [x] 이메일&비밀번호 type: input
   - [x] 제출 type: button

2. 유효성 검사:

   - [x] 이메일 조건: 최소 @,. 포함
   - [x] 비밀번호 조건: 8자 이상 입력
   - [x] 버튼: 이메일과 비밀번호 조건이 모두 만족해야 제출 버튼 활성화

3. 로그인 API 호출 후 올바른 응답을 받았을 경우 루트 경로로 이동
   - [x] 응답받은 토큰은 로컬스토리지 이동
   - [x] 다음번 로그인시 토큰이 존재한다면 루트 경로로 리다이렉트
   - [x] 토큰이 유효하지 않다면 사용자에게 알리고, 로그인 페이지로 리다이렉트

# Todo List

1. Todo List API를 호출하여 Todo List CRUD 기능을 구현

   - [x] 목록 / 상세 영역으로 나누어 구현해주세요
   - [x] Todo 목록을 볼 수 있습니다.
   - [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
   - [x] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
   - [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.

2. 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.

   - [x] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
   - [x] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.

3. 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요
   - [x] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다

## 사용한 프레임워크 및 라이브러리 설명

```json
"name": "wanted-pre-onboarding-challenge-fe-1",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@tanstack/react-query": "^4.1.3",
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.11.47",
    "@types/react": "^18.0.15",
    "@types/react-dom": "^18.0.6",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.3.0", // SPA 형식으로 구현하기 위한 라이브러리
    "react-scripts": "^5.0.1",
    "recoil": "^0.7.5", // 전역 상태 관리를 위해 사용
    "typescript": "^4.7.4",
    "web-vitals": "^2.1.4"
  },
  "devDependencies": {
    "@types/react-router-dom": "^5.3.3",
    "@types/styled-components": "^5.1.26",
    "styled-components": "^5.3.5" // 디자인 추가를 위한 라이브러리
  }

```

## 폴더 구조 설명

- api: 서버와 통신하는 api들을 promise 형식으로 반환하는 함수들을 저장한 폴더입니다.
- components: 각각의 폴더에서 사용되는 컴포넌트들을 저장한 폴더입니다.
- hooks: Custom Hooks를 저장한 폴더입니다.
- routes: page route들을 저장한 폴더입니다.
- utiliry: 서비스 구현에 필요한 utility 함수들을 저장한 폴더입니다.

```tree
  src
  ┣ api
  ┃ ┗ apis.ts
  ┣ components
  ┃ ┣ Auth
  ┃ ┃ ┗ AuthForm.tsx
  ┃ ┣ Todos
  ┃ ┃ ┣ CreateTodo.tsx
  ┃ ┃ ┣ TodoItem.tsx
  ┃ ┃ ┣ TodoList.tsx
  ┃ ┃ ┗ UpdateLabel.tsx
  ┃ ┣ Utility
  ┃ ┃ ┣ Loading
  ┃ ┃ ┃ ┣ DetailSkeleton.tsx
  ┃ ┃ ┃ ┣ SkeletonItem.tsx
  ┃ ┃ ┃ ┗ TodoListSkeleton.tsx
  ┃ ┃ ┣ Input.tsx
  ┃ ┃ ┗ Loading.tsx
  ┃ ┣ AuthLink.tsx
  ┃ ┣ Layout.tsx
  ┃ ┗ Title.tsx
  ┣ hooks
  ┃ ┣ useAuth.ts
  ┃ ┣ useCreateTodo.ts
  ┃ ┣ useDeleteTodo.ts
  ┃ ┣ useGetTodoDetail.ts
  ┃ ┣ useGetTodos.ts
  ┃ ┣ useGetToken.ts
  ┃ ┗ useUpdateTodo.ts
  ┣ routes
  ┃ ┣ Auth
  ┃ ┃ ┣ Login.tsx
  ┃ ┃ ┗ SignUp.tsx
  ┃ ┣ Todos
  ┃ ┃ ┣ Todo.tsx
  ┃ ┃ ┗ TodoDetail.tsx
  ┃ ┣ NotFound.tsx
  ┃ ┗ Route.tsx
  ┣ utility
  ┃ ┣ getPathName.ts
  ┃ ┣ handler.ts
  ┃ ┣ initialData.ts
  ┃ ┣ types.ts
  ┃ ┗ validation.ts
  ┣ App.tsx
  ┣ atom.tsx
  ┣ index.tsx
  ┣ react-app-env.d.ts
  ┗ reportWebVitals.ts
```

## 과제 진행 시 주안점 작성

    - 코드를 선언형으로 작성하고자 계속해서 의식하였고 어느정도는 성공한것 같았지만 많이 부족했습니다.
    - 또한 [타입 스크립트 클린코드](https://github.com/738/clean-code-typescript)를 준수하며 작성하려고 했습니다.

## 한계점 및 개선 사항 작성

    - React-Query에 대한 완벽한 이해가 부족했습니다. Suspense를 사용해서 Skeleton을 구현하고 싶었지만, 실력의 한계로 구현하지 못했습니다.
    - Error 핸들링과 UI부분을 좀 더 개선하면 좋을것 같습니다.
