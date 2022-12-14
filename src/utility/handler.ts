export interface IChangeValue {
  e: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>;
  fnc: React.Dispatch<React.SetStateAction<string>>;
}

export const inputChangeHandler = ({ e, fnc }: IChangeValue): void => {
  const { value } = e.currentTarget;
  fnc(value);
};
