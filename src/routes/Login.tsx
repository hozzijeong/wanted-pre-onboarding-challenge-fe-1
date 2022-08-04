import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const changeValue = (
    e: React.FormEvent<HTMLInputElement>,
    fnc: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    const { value } = e.currentTarget;
    fnc(value);
  };

  return (
    <form method="post">
      <input
        type="email"
        value={email}
        onChange={(e) => changeValue(e, setEmail)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => changeValue(e, setPassword)}
      />
      <input type="submit" value="로그인" />
    </form>
  );
}

export default Login;
