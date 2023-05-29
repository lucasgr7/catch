import { ref } from "vue";
import useActions from "./useActions";

export default function useHero() {
  // state
  const name = ref("Scientist");

  // dependencies
  const { move } = useActions();

  return { name, move };
}
