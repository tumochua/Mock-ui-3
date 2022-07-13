import { createRouter, createWebHistory } from "vue-router";
import ProfileVue from "./component/Profile.vue";
import NotFoundVue from "./notfound/NotFound.vue";
const routes = [
  { path: "/", component: ProfileVue },

  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFoundVue },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
