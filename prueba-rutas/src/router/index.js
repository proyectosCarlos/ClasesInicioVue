import { createRouter, createWebHistory } from "vue-router";
// import login from "../views/Login";

const routes = [
  {
    path: "/",
    name: "login",
    component: import("../views/Login"),
  },
  {
    path: "/julian",
    name: "dashboard",
    component: import("../views/Dashboard"),
    children: [
      {
        path: "",
        name: "home-dasboard",
        component: import("../modulos/dashboard/inicioDashboard"),
      },
      {
        path: "hugo",
        name: "componente-dashboard",
        component: import("../modulos/dashboard/componentePrueba"),
      },
    ],
  },
  {
    path: "/Erick",
    name: "formregistro",
    component: import("../views/FormRegistro.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
