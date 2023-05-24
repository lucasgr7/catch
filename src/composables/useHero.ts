import { ref } from "vue";
import usePlayerBase from "./usePlayerEvents";

export default function useHero() {
  // state
  const name = ref("Scientist");

  // dependencies
  const { move } = usePlayerBase();

  return { name, move };
}
