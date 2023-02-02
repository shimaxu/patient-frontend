import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/addresses",
      name: "addresses",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/addresses/IndexView.vue"),
    },
    {
      path: "/patients",
      name: "patients",
      component: () => import("../views/patients/IndexView.vue"),
    },
  ],
});

export default router;
