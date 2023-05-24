import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { Quasar } from "quasar";
import router from "./router";

// import tailwind js files
import "../postcss.config.js";
import "../tailwind.config.js";
import "tailwindcss/tailwind.css";

// Import icon libraries
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/material-symbols-sharp/material-symbols-sharp.css";
import "quasar/src/css/index.sass";

// import firebase
import { firebaseApp } from "./firebase/index.js";
import { VueFire } from 'vuefire'



const catchGame = createApp(App);
catchGame
  .use(Quasar, {
    plugins: {},
  })
  .use(router)
  .use(VueFire, {
    firebaseApp
  });
catchGame.mount("#app");
