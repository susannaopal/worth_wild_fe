import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import LoginPage from "../views/LoginPage.vue";
import HomePage from "../views/HomePage.vue";
import UserProfile from "../views/UserProfile.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: LandingPage,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/guest",
      name: "guest",
      component: HomePage,
    },
    {
      path: "/user-profile",
      name: "user profile",
      component: UserProfile,
    }
  ],
});

export default router;
