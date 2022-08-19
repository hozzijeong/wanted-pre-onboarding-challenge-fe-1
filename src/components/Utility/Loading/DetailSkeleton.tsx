import {
  ButtonSkeleton,
  InputSkeleton,
  TitleSkeleton,
} from "./TodoListSkeleton";

function DetailSkeleton() {
  return (
    <>
      <TitleSkeleton />
      <InputSkeleton />
      <InputSkeleton />
      <ButtonSkeleton />
    </>
  );
}

export default DetailSkeleton;
