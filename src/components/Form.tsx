import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { inputChangeHandler } from "../utility/handler";
import { IAuth } from "../utility/types";
import { validateEmail, validatePassword } from "../utility/validation";

interface IForm {
  category: string;
  api: (body: IAuth) => Promise<any>;
}

function Form({ category, api }: IForm) {
  const navigation = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    api({ email, password }).then((data) => {
      if (data?.details) {
        alert(data.details);
      } else {
        alert(data.message);
        localStorage.setItem("token", data.token);
        navigation("/");
      }
    });
  };
  return (
    <form method="post" onSubmit={(e) => onSubmit(e)}>
      <input
        type="email"
        value={email}
        onChange={(e) => inputChangeHandler({ e, fnc: setEmail })}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => inputChangeHandler({ e, fnc: setPassword })}
      />
      <input
        type="submit"
        value={category}
        disabled={!validateEmail(email) || !validatePassword(password)}
      />
    </form>
  );
}

export default Form;
