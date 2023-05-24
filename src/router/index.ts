import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../components/HelloWorld.vue"),
      name: "home",
    },
    {
      path: "/game/:id",
      component: () => import("../components/Game.vue"),
      name: "game",
    },
  ],
});

export default router;
