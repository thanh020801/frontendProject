import { createWebHistory, createRouter } from "vue-router"
import DashboardLayout from '@/views/DashboardLayout.vue'
import DashboardPage from "@/views/DashboardPage.vue";
import ListUserPage from '@/views/ListUserPage.vue'
import Login from '@/views/Login.vue'
import ProductsPage from '@/views/ProductsPage.vue'
import UserProfilePage from '@/views/UserProfilePage.vue'
const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: DashboardPage,
      },
      {
        path: "user-profile",
        name: "User Profile",
        component: UserProfilePage,
      },
      {
        path: "ListProduct",
        name: "ListProduct",
        component: ProductsPage,
      },
      {
        path: "ListClient",
        name: "ListClient",
        component: ListUserPage,
      },
      {
        path: "Login",
        name: "Login",
        component: Login,
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router