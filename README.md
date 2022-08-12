# To Do List

## Login / SignUp

# 구현 기능

1. /auth 경로에 로그인/회원가입 기능 개발

   - 두 기능을 별도의 경로로 구분해도 됨
   - 이메일&비밀번호 type: input
   - 제출 type: button

2. 유효성 검사:

   - 이메일 조건: 최소 @,. 포함
   - 비밀번호 조건: 8자 이상 입력
   - 버튼: 이메일과 비밀번호 조건이 모두 만족해야 제출 버튼 활성화

3. 로그인 API 호출 후 올바른 응답을 받았을 경우 루트 경로로 이동

   - 응답받은 토큰은 로컬스토리지 이동
   - 다음번 로그인시 토큰이 존재한다면 루트 경로로 리다이렉트
   - 토큰이 유효하지 않다면 사용자에게 알리고, 로그인 페이지로 리다이렉트 // 토큰 유효한지 확인하기

## Todo List

# 구현 기능

1. Todo List API를 호출하여 Todo List CRUD 기능을 구현

   - 목록 / 상세 영역으로 나누어 구현해주세요
   - Todo 목록을 볼 수 있습니다.
   - Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
   - Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
   - Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.

2. 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.

   - 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
   - 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.

3. 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요
   - 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다

## 파일 구조

- src
  - api
    - apis.ts
  - components
    - CreateTodo.tsx
    - Form.tsx
    - TodoItem.tsx
  - routes
    - Login.tsx
    - Route.tsx
    - SignUp.tsx
    - Todo.tsx
    - TodoDetail.tsx
  - utility
    - handler.ts
    - types.ts
    - validation.ts

## 1차 리팩토링 요구 사항

1. TypeScript 적용

- strict 옵션 적용
- 타입 가드 및 타입 추론을 사용해 any, 타입 단언을 모두 없애기
- 반복되는 타입은 제네릭, 타입 상속 / 합성 등으로 추상화
- 보다 좁은 타입으로 정의 (ex. string → as const or union)
