import { useState } from "react";
import { inputChangeHandler } from "utility/handler";
import useCreateTodo from "hooks/useCreateTodo";
import { createTodos } from "api/apis";
import { DataResult } from "utility/types";
import { useSetRecoilState } from "recoil";
import { todosAtom } from "atom";
import { initialResultData } from "utility/initialData";
import Title from "components/Title";
import Input from "components/Utility/Input";
import { AuthContainer, SubmitInput } from "components/Auth/AuthForm";
import { validateLength } from "utility/validation";

interface ICreateTodo {
  token: string | null;
}

function CreateTodo({ token }: ICreateTodo) {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const setTodos = useSetRecoilState(todosAtom);
  const options = {
    onSuccess: (data: DataResult) => {
      if (data?.details) alert(data.details);
      else setTodos((curVal) => [...curVal, data.data]);
    },
    initialData: initialResultData,
  };
  const createMutation = useCreateTodo(createTodos, options);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (typeof token === "string") {
      const params = {
        body: { title, content },
        token,
      };
      createMutation.mutate(params);
      setTitle("");
      setContent("");
    }
  };

  return (
    <div>
      <Title title="AddTask" size={"3.6rem"} />
      <AuthContainer onSubmit={(e) => onSubmit(e)}>
        <Input
          type="text"
          value={title}
          changeHandler={inputChangeHandler}
          fnc={setTitle}
          placeHolder="제목을 입력해주세요"
        />

        <Input
          type="text"
          value={content}
          changeHandler={inputChangeHandler}
          fnc={setContent}
          placeHolder="내용을 입력해주세요"
        />
        <SubmitInput
          type="submit"
          value="추가하기"
          disabled={!validateLength(title) || !validateLength(content)}
        />
      </AuthContainer>
    </div>
  );
}

export default CreateTodo;
