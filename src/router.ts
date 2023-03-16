import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    name: "post",
    path: "/",
    component: () => import("./pages/post.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
});

export default router;
