import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../pages/Welcome.vue"),
      name: "home",
    },
    {
      path: "/game/:id",
      component: () => import("../pages/Game.vue"),
      name: "game",
    },
  ],
});

export default router;
