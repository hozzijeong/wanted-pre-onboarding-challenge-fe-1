import Input from "components/Utility/Input";
import styled from "styled-components";
import { inputChangeHandler } from "utility/handler";

interface IUpdateLabel {
  title: string;
  state: boolean;
  value: string;
  fnc: React.Dispatch<React.SetStateAction<string>>;
}

const LabelSpan = styled.span`
  font-size: 2.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 400;
  width: ${(props) => props.style?.width};
`;

const LabelParagraph = styled.p`
  font-size: 2.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 44rem;
  font-weight: 350;
`;

function UpdateLabel({ title, state, value, fnc }: IUpdateLabel) {
  return (
    <label style={{ height: "6rem", display: "flex", alignItems: "center" }}>
      <LabelSpan style={{ width: "10rem" }}>{title}: </LabelSpan>
      {state ? (
        <Input value={value} changeHandler={inputChangeHandler} fnc={fnc} />
      ) : (
        <LabelParagraph>{value}</LabelParagraph>
      )}
    </label>
  );
}

export default UpdateLabel;
