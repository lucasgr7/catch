import { useGameCollection } from "./useGame";
import { PlayerSessionState } from "../constant/interfaces";
import { useLocalStorage } from "@vueuse/core";

// create an localStorage object storing the action
const localStorageRef = useLocalStorage('action', {} as PlayerSessionState);

// create composable
export default function usePlayerBase() {
  const {getMyPlayer} = useGameCollection();

  // register a new action by the player to make him wait
  // saves into a localStorage the action name and the start time and the end time
  function registerAction(action: PlayerSessionState) {
    console.log("register action", action);
    const playerUUID = localStorage.getItem("playerUUID");
    if (!playerUUID) {
      throw new Error("Player UUID not found");
    }

    localStorageRef.value = action;
  }

  // show a modal for the player waiting time
  function displayWaitingTime(): void {}

  // checks if the user state is hacked by a scientist player
  function isUserHacked(): boolean {
    const myPlayer = getMyPlayer();
    return myPlayer.state === 'hacked';
  }

  // listen if the user is affected by motivation
  function isUserMotivated(): void {}

  function addSecondsToNow(seconds: number): Date {
    const now = new Date();
    return new Date(now.getTime() + seconds * 1000);
  }

  function move() {
    if (isUserHacked()) return;

    // TODO: validate state position is valid

    // TODO: 

    // get the time for the move-event from .env MOVE_TIME
    const moveActionSeconds = import.meta.env.VITE_APP_MOVE_TIME;

    // register the action event
    registerAction({
      action: 'move',
      startTime: new Date(),
      endTime: addSecondsToNow(moveActionSeconds),
    });


  }

  return {
    move,
    localStorageRef
  };
}
