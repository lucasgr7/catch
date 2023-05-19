import { ref } from "vue";
import usePlayerBase from "./usePlayerBase";

export default function useHero() {
  // state
  const name = ref("Scientist");

  // dependencies
  const { move } = usePlayerBase();

  return { name, move };
}
