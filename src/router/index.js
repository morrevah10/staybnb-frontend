import { createRouter, createWebHashHistory } from "vue-router";
import stayApp from "../views/stay-app.vue";
// import stayEdit from "../views/stay-edit.vue";
import stayDetails from "../views/stay-details.vue";
import hostPage from "../views/becom-host.vue";
import loginPage from "../views/login-page.vue";
// import dashboardPage from "../views/stay-details.vue";
import tripsPage from "../views/trip-page.vue";

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
    // {
    //   path: "/edit/:stayId?",
    //   name: "stay-edit",
    //   component: stayEdit,
    // },
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
    // {
    //   path: "/dashboard",
    //   name: "dashboard",
    //   component: dashboardPage,
    // },
    {
      path: "/trips",
      name: "trips",
      component: tripsPage,
    },
  ],
});

export default router;
