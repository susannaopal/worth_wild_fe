import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import LoginPage from "../views/LoginPage.vue";
import HomePage from "../views/HomePage.vue";
import UserProfile from "../views/UserProfile.vue";
import AnimalDetails from "../views/AnimalDetails.vue";

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
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/main",
      name: "HomePage",
      component: HomePage,
      props: true,
    },
    {
      path: "/user-profile",
      name: "user profile",
      component: UserProfile,
    },
    {
      path: "/details",
      name: "details",
      component: AnimalDetails,
    }
  ],
});

export default router;
