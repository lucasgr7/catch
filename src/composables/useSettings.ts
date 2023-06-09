import { useFullscreen } from "@vueuse/core";


export function useSettings(){
  function doFullScreen(){
    //using vue-use for fullscreen
    const { isSupported, toggle } = useFullscreen();
    if (isSupported.value) {
      toggle();
    }
  }
  return { doFullScreen };
}