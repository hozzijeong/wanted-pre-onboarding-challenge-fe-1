import {
  ButtonSkeleton,
  InputSkeleton,
  TitleSkeleton,
} from "./TodoListSkeleton";

function DetailSkeleton() {
  return (
    <>
      <TitleSkeleton />
      <br />
      <br />
      <InputSkeleton />
      <br />
      <InputSkeleton />
      <br />
      <ButtonSkeleton />
    </>
  );
}

export default DetailSkeleton;
