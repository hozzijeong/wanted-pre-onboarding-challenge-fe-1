import styled from "styled-components";

const TitleP = styled.p`
  font-size: ${(props) => props.style?.fontSize};
  font-weight: bold;
  margin: 2rem 0;
  text-align: ${(props) => props.style?.textAlign};
`;

interface ITitle {
  title: string;
  size: string;
}

function Title({ title, size }: ITitle) {
  return <TitleP style={{ fontSize: size }}>{title}</TitleP>;
}

export default Title;
