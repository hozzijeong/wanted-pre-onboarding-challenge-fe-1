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

## 2주간 과제를 진행하면서 했던 고민

1. Detail 상태관리
   과제 요구사항에 있는 TodoList와 Detail을 한 화면에 보여달라는 요청이 있었습니다. 해당 요청을 보고는 중첩 라우팅을 사용하고, GetDetails라는 API를 사용하기 보다 그냥 클릭한 item 값을 넘겨주면 되지 않나? 라고 생각을 했고 실제로 처음에는 그렇게 했었습니다.
   하지만 그런식으로 본인을 속이면 실력이 늘것 같지 않아서 다시 코드를 작성했습니다.

   ```typescript
   // TodoItem.tsx
   <div>
     <span>{todo.title}</span>
     <button onClick={deleteItem}>삭제하기</button>
     <Link to={`/details/${todo.id}`} state={todo}>
       상세보기
     </Link>
   </div>
   ```

   ```typescript
   // TodoDetail.tsx
   const location = useLocation();
   const state = location.state as ITodos;
   const token = localStorage.getItem("token") as string;
   ```

   우선 중첩 라우팅으로 코드를 처리하는데, Detail 페이지가 Main 페이지가 렌더링 될때도 계속해서 렌더링 되는 것이 문제였습니다. 따라서 id를 Todo.tsx 페이지에서 받고 id의 존재 유무에 따라 Detail 페이지를 render 할지 말지로 코드를 작성했습니다.

   ```typescript
   // Todo.tsx
   {
     id && <TodoDetail />;
   }
   ```

   하지만 문제는 이후에 발생합니다. Detail에 있는 React-Query에 있는 query-key 값을 통해 관리했는데, 계속해서 직전에 있는 상태를 나타내서 보여주게 되었습니다. 아직 React-Query에 익숙하지 않는데 아무 코드나 복사했다가 그런 사단이 일어났습니다.

   ```typescript
   // 수정 전
   // useGetTodoDetail
   function useGetTodoDetail(api: (params: IGetTodoInfo) => Promise<DataResult>) {
   const navigation = useNavigate();
   const setDetail = useSetRecoilState(detailAtom);
   const mutation = useMutation(api, {
      onError: (error) => {},
      onSuccess: (response: DataResult) => {
         const { details, data } = response;
         if (details) navigation("/");
         else setDetail(data);
      },
   });

   return mutation;
   // TodoDetail.tsx
   ...
   useEffect(() => {
      if (typeof id === "string" && typeof token === "string") {
         state.mutate({ id, token });
         if (state.isSuccess) {
         const { data } = state.data;
         setTitle(data.title);
         setContent(data.content);
         }
      } else {
         setDetail(null);
         navigation("/");
   ...



   // 수정 후
   // useGetTodoDetail

   function useGetTodoDetail(id: string, token: string) {
   return useQuery(["todos", id], () => getTodosDetail({ token, id }), {
      initialData: initialResultData,
   });
   }

   // TodoDetail.tsx

   ...
   const { data } = useGetTodoDetail(id, token);

   useEffect(() => {
      if (data) updateData(data);
   }, [data]);
   ...
   ```

하지만 다음과 같이 수정을 거치고, Detail 화면일 렌더링 될 때 data 값을 받아서 반환하도록 선언하여 문제를 해결할 수 있었습니다.

2. 적응되지 않는 Error Handling
   너무 투박하게 Error 처리를 한 감이 없지않게 있습니다. 모든 API option에다가 `throw console.error(error)` 를 할 수도 없는 노릇이었고 기술 블로그에 나와있는 방식 중에 가장 [간단한 방식](https://tkdodo.eu/blog/react-query-error-handling)으로 처리만 했습니다.

   ```typescript
   // App.tsx
   queryCache: new QueryCache({
         onError: (error, query) => {
         if (query.state.data !== undefined)
            console.error(`error occured: ${error}`);
         },
      }),
   ```

3. 적용하지 못한 Skeleton과 Suspense
   Loading 상황일 때 향상된 UI를 제공하기 위해 Skeleton과 Suspense를 이용하여 작성하려고 했지만 왜인지 모르게 API 통실할 때 렉이 걸리고 렌더링이 느리게 되는 현상이 나타났습니다. 또한, 원하는 Skeleton은 나오지 않고 그저 제일 처음에 아무 데이터도 입력되지 않는 값으로만 나타나있어서 어느것이 문제인지 알지 못하고 이렇게 끝나게 되었습니다. (TodoList CRUD에 나오는 렉)
   해당 기능 구현에 대해서는 추후에 알아보고 다시 구현해볼 생각입니다.

4. 선언형으로 작성하기
   항상 마음속으로 "선언형으로 작성해야지" 라는 생각을 가지고 코드를 작성하지만, 일단은 기능 구현하기에 바빠서 항상 명령형으로 작성한 뒤 선언형으로 고치기 급급했습니다. 모든 코드를 선언형으로 작성했냐 라는 대답에 확신의 YES를 하지는 못하지만,,, 그래도 리팩토링 과정을 거치면서 그나마 좀 나아지는 것 같았습니다.

   ```typescript
   // 수정 전
   // useCreateTodo
   function useCreateTodo(api: (params: ICreateTodos) => Promise<DataResult>) {
     const setTodos = useSetRecoilState(todosAtom);

     const mutation = useMutation(api, {
       onError: (error) => {
         console.error(error);
       },
       onSuccess: (data: DataResult) => {
         if (data?.details) alert(data.details);
         else setTodos((curVal) => [...curVal, data.data]);
       },
     });

     return mutation;
   }
   // 수정 후
   // useCreateTodo
   function useCreateTodo(
     api: (params: ICreateTodos) => Promise<DataResult>,
     options: MutationOptions<DataResult, unknown, ICreateTodos, unknown>,
   ) {
     const mutation = useMutation(api, options);

     return mutation;
   }
   ```

## 느낀점

아직 배워야 할 것이 너무 많다는 것을 알게되었습니다. 2주만에 실력에 대한 드라마틱한 변화는 없었지만, 앞으로 제가 어떤 방식으로 공부를 해야할지에 대한 방향성을 알게된 것 같아서 너무 기뻤습니다. 개념 위주의 게으른 공부 방식이 얼마나 위험한지에 대해 알게되었고 무엇인가를 기록해야 한다는 것을 느끼게된 2주였습니다.
