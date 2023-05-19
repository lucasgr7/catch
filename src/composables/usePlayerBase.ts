import { ref } from "vue";

// create composable
export default function usePlayerBase() {
  // register a new action by the player to make him wait
  // saves into a localStorage the action name and the start time and the end time
  function registerAction(action: string, start: Date, end: Date) {
    console.log("register action");
  }

  // show a modal for the player waiting time
  function displayWaitingTime(): void {}

  // checks if the user state is hacked by a scientist player
  function isUserHacked(): boolean {
    return false;
  }

  // listen if the user is affected by motivation
  function isUserMotivated(): void {}

  function move() {
    debugger;
    if (isUserHacked()) return;

    // get the time for the move-event from .env MOVE_TIME
    const timerSeconds = import.meta.env.VITE_APP_MOVE_TIME;

    // register the action event
    registerAction("move", new Date(), new Date() + timerSeconds);

    // register the action move
    console.log("user moved");
  }

  return {
    move,
  };
}
