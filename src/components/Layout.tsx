import { Suspense } from "react";
import styled from "styled-components";
import Loading from "./Utility/Loading";

const LayoutContainer = styled.div`
  margin: 10rem auto;
  width: 108rem;
`;

interface ILayout {
  children: JSX.Element;
}

function Layout({ children }: ILayout) {
  return (
    <Suspense fallback={<Loading />}>
      <LayoutContainer>{children}</LayoutContainer>;
    </Suspense>
  );
}

export default Layout;
