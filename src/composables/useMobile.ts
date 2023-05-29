import { ref } from 'vue';

export default function useMobile() {
  const isMobile = ref(false);

  const userAgent =
    navigator.userAgent || navigator.vendor ;
  if (/android/i.test(userAgent)) {
    isMobile.value = true;
  }
  if (/iPad|iPhone|iPod/.test(userAgent)) {
    isMobile.value = true;
  }

  return {
    isMobile,
  };
}