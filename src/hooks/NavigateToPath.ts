import { useNavigate } from "react-router-dom";

export function NavigateToPath(path: string) {
  const navigation = useNavigate();

  navigation(`${path}`);
}
