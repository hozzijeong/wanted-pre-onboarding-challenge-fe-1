import styled from "styled-components";
import { IChangeValue } from "../../utility/handler";

interface IInputProps {
  type?: string;
  value: string;
  changeHandler: ({ e, fnc }: IChangeValue) => void;
  fnc: React.Dispatch<React.SetStateAction<string>>;
  placeHolder?: string;
  disabled?: boolean;
}

export const ValueInput = styled.input`
  border-radius: 1rem;
  outline: none;
  height: 4rem;
  margin: 1rem 0;
  font-size: 2.4rem;
  padding: 0 1rem;
`;

function Input({
  type,
  value,
  changeHandler,
  fnc,
  disabled,
  placeHolder,
}: IInputProps) {
  return (
    <ValueInput
      type={type}
      value={value}
      onChange={(e) => changeHandler({ e, fnc })}
      disabled={disabled}
      placeholder={placeHolder}
    />
  );
}

export default Input;
