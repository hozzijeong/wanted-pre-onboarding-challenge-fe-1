export interface IChangeValue {
  e: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>;
  fnc: React.Dispatch<React.SetStateAction<string>>;
}

export const inputChangeHandler = ({ e, fnc }: IChangeValue) => {
  const { value } = e.currentTarget;
  fnc(value);
};
