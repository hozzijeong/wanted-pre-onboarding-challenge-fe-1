import { Suspense } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CreateTodo from "components/Todos/CreateTodo";
import TodoList from "components/Todos/TodoList";
import useGetToken from "hooks/useGetToken";
import TodoListSkeleton from "components/Utility/Loading/TodoListSkeleton";
import Title from "components/Title";
import TodoDetail, { DefaultButton } from "./TodoDetail";
import DetailSkeleton from "components/Utility/Loading/DetailSkeleton";
import { splitPathName } from "utility/getPathName";

function Home() {
  const navigation = useNavigate();
  const token = useGetToken();
  const location = useLocation();

  const id = splitPathName(location.pathname)[2];

  // const { data } = useGetTodos();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigation("/auth/login");
  };
  // suspsnse가 발생하기 전 이미 data가 불려졌기 때문에 fallback이 일어나지 않음.
  // Suspense에서 하위 components들을  렌더링 할 수 없을 때 fallback 을 실행하는 것임
  // 근데, 아래 컴포넌트들은 todos가 존재하면 언제든지 나타날 수 있는 데이터들임.
  // 그리고 todos가 기본적으로 나타나게 됨. 즉, fallback이 일어나지 않게됨.
  // 컴포넌트들이 렌더링 되기 전에 data의 fetching이 끝난다면, suspense가 발생하지 않음.
  // 좀 더 데이터들을 분리할 필요가  있을 듯.
  // 그 전에 data가 이미 [], ''으로 나타나는데, 해당 문제를 먼저 해결해야 할 듯.
  // initialState를 설정해서 suspense가 나타날 기회를 놓쳐버림.
  // 근데 갑자기 App에서 렌더링 미쳐버림
  // jsx 기준으로 컴포넌트 형식의 파일을 반환해야 가능한듯.
  // initialData가 없으니까 값이 suspense 사용이 되고 그 값이 미쳐 날뛰게 되어 벌임..
  // 파일 형식을 한번 손봐야 할듯? 그리고 전역 상태 관리에 대한 고민도 한번 해봐야 함.

  return (
    <>
      <Title title="Tasks" size={"4.6rem"} />
      <DefaultButton onClick={logoutHandler}>로그아웃</DefaultButton>
      <CreateTodo token={token} />
      <hr />
      <Suspense fallback={<TodoListSkeleton />}>
        <TodoList />
      </Suspense>
      <Suspense fallback={<DetailSkeleton />}>{id && <TodoDetail />}</Suspense>
    </>
  );
}
export default Home;
