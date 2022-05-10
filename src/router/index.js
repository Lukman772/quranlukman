import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TampilanBacaView from "../views/TampilanBacaView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/tampilanbaca/:id",
      name: "tampilanbaca",
      component: TampilanBacaView,
    },
    {
      path: "/randomayat",
      name: "randomayat",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/simple/id:",
      name: "/simple",
      component: () => import("../views/BacaImlaeiSimpleView.vue"),
    },
    {
      path: "/imlaei",
      name: "imlaei",
      component: () => import("../views/ImlaeiSimpleView.vue"),
    },
    {
      path: "/indopak/id:",
      name: "/indopak",
      component: () => import("../views/BacaIndopakView.vue"),
    },
    {
      path: "/mushafindopak",
      name: "mushafindopak",
      component: () => import("../views/IndopakView.vue"),
    },
  ],
});

export default router;
