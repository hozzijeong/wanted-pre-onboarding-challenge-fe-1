import { IChangeValue } from "../utility/handler";

interface IInputProps {
  type?: string;
  value: string;
  changeHandler: ({ e, fnc }: IChangeValue) => void;
  fnc: React.Dispatch<React.SetStateAction<string>>;
  disabled?: boolean;
}

function Input({ type, value, changeHandler, fnc, disabled }: IInputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => changeHandler({ e, fnc })}
      disabled={disabled}
    />
  );
}

export default Input;
