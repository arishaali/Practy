import { createRouter, createWebHashHistory } from "vue-router";
import SignIn from "../views/SignIn.vue";
import Dashboard from "../views/Dashboard.vue";
import Form from "../views/Form.vue";

const routes = [
  {
    path: "/",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/form",
    name: "Form",
    component: Form,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
