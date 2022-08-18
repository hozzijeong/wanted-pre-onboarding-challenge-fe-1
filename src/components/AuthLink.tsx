import styled from "styled-components";

const AuthContainer = styled.div`
  border-radius:1rem
  width: 54rem;
  font-size: 2.4rem;
  text-align: center;
  background-color: #bebebe;
  &:hover {
    background-color: #adadad;
  }
  margin: 1rem 0;
`;
function AuthLink({ title }: { title: string }) {
  return <AuthContainer>{title}</AuthContainer>;
}

export default AuthLink;
