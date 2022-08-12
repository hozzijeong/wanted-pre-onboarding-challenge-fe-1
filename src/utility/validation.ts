import { ITodos } from "./types";

export function validateEmail(email: string): boolean {
  const regExp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  return regExp.test(email);
}

export function validatePassword(password: string): boolean {
  const regExp = /.{8,}/;
  return regExp.test(password);
}

export function checkStateNull(state: ITodos | null): boolean {
  return state === null;
}
