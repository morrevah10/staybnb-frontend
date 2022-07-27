import { createRouter, createWebHashHistory } from "vue-router";
import stayApp from "../views/stay-app.vue";
import stayDetails from "../views/stay-details.vue";
import hostPage from "../views/become-host.vue";
import loginPage from "../views/login-page.vue";
import signupPage from "../views/signup-page.vue";
import dashboardPage from "../views/dashboard.vue";
import tripsPage from "../views/trips-page.vue";
// import stayEdit from "../views/stay-edit.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "stay-app",
      component: stayApp,
    },
    {
      path: "/:stayId",
      name: "stay-details",
      component: stayDetails,
    },
    {
      path: "/host",
      name: "host",
      component: hostPage,
    },
    {
      path: "/login",
      name: "login",
      component: loginPage,
    },
    {
      path: "/signup",
      name: "signup",
      component: signupPage,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: dashboardPage,
    },
    {
      path: "/trips",
      name: "trips",
      component: tripsPage,
    },
    // {
    //   path: "/edit/:stayId?",
    //   name: "stay-edit",
    //   component: stayEdit,
    // },
  ],
});

export default router;
