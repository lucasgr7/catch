import { ComputedRef, watch } from "vue";
import { Player } from "../constant/interfaces";
import useAmericaMap from "./useAmericaMap";

export default function useWatchers(){

  function registerDisplayPlayerCurrentLocation(player: ComputedRef<Player>){
    console.info('registering watcher for player');
    const { addPlayerToState } = useAmericaMap();
    watch(player, (newPlayer: Player) => {
      console.info('event for player', newPlayer);

      if(!newPlayer) return;

      addPlayerToState(newPlayer.currentState, 'navy');
    }, { immediate: true })
  }
  return {registerDisplayPlayerCurrentLocation };
}