import styled from "styled-components";

const LayoutContainer = styled.div`
  margin: 10rem auto;
  width: 54rem;
`;

interface ILayout {
  children: JSX.Element;
}

function Layout({ children }: ILayout) {
  return <LayoutContainer>{children}</LayoutContainer>;
}

export default Layout;
