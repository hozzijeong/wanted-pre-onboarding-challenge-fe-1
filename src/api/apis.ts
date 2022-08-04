const BASE_URL = "http://localhost:8080";
export function loginAPI(email: string, password: string) {
  const body = {
    email,
    password,
  };
  return fetch(`${BASE_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((response) => response.json());
}

export function SignUpAPI(email: string, password: string) {
  const body = {
    email,
    password,
  };
  return fetch(`${BASE_URL}/users/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((response) => response.json());
}
