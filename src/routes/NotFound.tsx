import styled from "styled-components";

const FoundContainer = styled.div`
  font-size: 4.8rem;
  text-align: center;
  font-weight: bold;
`;
function NotFound() {
  return <FoundContainer>404 NotFound</FoundContainer>;
}

export default NotFound;
