import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/home.vue"),
    },

    {
      path: "/about",
      name: "about",
      component: () => import("../views/about/index.vue"),
    },
    {
      path: "/all-games",
      name: "allGames",
      component: () => import("../views/allGames/index.vue"),
    },
    {
      path: "/game-detail",
      name: "gameDetail",
      component: () => import("../views/allGames/detail.vue"),
    },
    {
      path: "/play",
      name: "play",
      component: () => import("../views/play/index.vue"),
    },
    {
      path: "/result",
      name: "result",
      component: () => import("../views/results/index.vue"),
    },
    {
      path: "/sell",
      name: "sell",
      component: () => import("../views/sell/index.vue"),
    },
    {
      path: "/event",
      name: "event",
      component: () => import("../views/event/index.vue"),
    },
  ],
});

export default router;
