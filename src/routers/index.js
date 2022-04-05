import { createWebHistory, createRouter } from "vue-router"
import DashboardLayout from '@/views/DashboardLayout.vue'
import DashboardPage from "@/views/DashboardPage.vue"
import ListUserPage from '@/views/ListUserPage.vue'
import Login from '@/views/Login.vue'
import ProductsPage from '@/views/ProductsPage.vue'
import UserProfilePage from '@/views/UserProfilePage.vue'
import NotFoundPage from '@/views/NotFound.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import AddAProduct from '@/views/AddAProduct.vue'


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
        name: "UserProfile",
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
        path: "addNewProduct",
        name: "addNewProduct",
        component: AddAProduct,
      },
    ],
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundPage,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router