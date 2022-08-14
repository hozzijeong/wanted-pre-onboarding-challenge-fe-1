import { useState } from "react";
import { inputChangeHandler } from "../utility/handler";
import { AuthResult, IAuth } from "../utility/types";
import { validateEmail, validatePassword } from "../utility/validation";

interface IForm {
  category: string;
  api: (body: IAuth) => Promise<AuthResult>;
  fetcher: (data: AuthResult) => void;
}

function AuthForm({ category, api, fetcher }: IForm) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const authSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await api({ email, password });
      console.log(data);
      fetcher(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form method="post" onSubmit={(e) => authSubmitHandler(e)}>
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

export default AuthForm;
