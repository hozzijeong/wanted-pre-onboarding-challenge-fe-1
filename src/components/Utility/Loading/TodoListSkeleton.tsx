import styled from "styled-components";
import SkeletonItem from "./SkeletonItem";

function TodoListSkeleton() {
  return (
    <>
      <TitleSkeleton />
      <br />
      <ButtonSkeleton />
      <br />
      <TitleSkeleton />
      <br />
      <InputSkeleton />
      <br />

      <InputSkeleton />
      <br />

      <InputSkeleton />
      <hr />
      <TitleSkeleton />
      <br />

      <ContainerSkeleton />
    </>
  );
}

export const TitleSkeleton = styled(SkeletonItem)`
  width: 27rem;
  height: 6rem;
`;

export const ButtonSkeleton = styled(SkeletonItem)`
  width: 12rem
  height: 6rem;
`;

export const InputSkeleton = styled(SkeletonItem)`
  width: 54rem;
  height: 6rem;
`;

const ContainerSkeleton = styled(SkeletonItem)`
  width: 54rem;
  height: 27rem;
`;

export default TodoListSkeleton;
