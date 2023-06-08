import { useGame } from "./useGame";
import { Player, PlayerSessionState } from "../constant/interfaces";
import { useLocalStorage } from "@vueuse/core";

// create an localStorage object storing the action
const localStorageRef = useLocalStorage('action', {} as PlayerSessionState);
const { game } = useGame();

// create composable
export default function useActions() {

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
  function isUserHacked(player: Player): boolean {
    return player.state === 'hacked';
  }

  // listen if the user is affected by motivation
  function isUserMotivated(): void {}

  function addSecondsToNow(seconds: number): Date {
    const now = new Date();
    return new Date(now.getTime() + seconds * 1000);
  }

  // should receive a player and a state, validates if his state is valid and then
  // register the action
  // then the action should update the database
  function move(player: Player, state: string) {
    if (isUserHacked(player)) return;

    // TODO: validate state position is valid


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
