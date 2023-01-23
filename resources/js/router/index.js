import { createWebHistory, createRouter } from 'vue-router'
import store from '@/store'

const Login = () => import('@/components/Login.vue')
const Register = () => import('@/components/Register.vue')
const Dashboard = () => import('@/components/Dashboard.vue')

const routes = [
    {
        name: "login",
        path: "/login",
        component: Login,
        meta: {
            middleware: "guest",
            title: `Login`
        }
    },
    {
        name: "register",
        path: "/register",
        component: Register,
        meta: {
            middleware: "guest",
            title: `Register`
        }
    },
    {
        name: "dashboard",
        path: "/",
        component: Dashboard,
        meta: {
            middleware: "auth",
            title: `Dashboard`
        },
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    if (to.meta.middleware == "guest") {
        if (store.state.auth.token) {
            next({ name: "dashboard" })
        }
        next()
    }
    else {
        if (store.state.auth.token) {
            next()
        } else {
            next({ name: "login" })
        }
    }
})

export default router
