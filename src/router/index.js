import { createRouter, createWebHistory } from "vue-router";
import DashboardComponent from "../views/DashboardComponent.vue";
import LoginComponent from "../views/LoginComponent.vue";
import RegistrationComponent from "../views/RegistrationComponent.vue";

const routes=[
    {
        paht:"/",
        name:"DashboardComponent",
        component:DashboardComponent
    },
    {
        path:"/login",
        name:"LoginComponent",
        component:LoginComponent
    },
    {
        path:"/registration",
        name:"RegistrationComponent",
        component:RegistrationComponent
    }
]


const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;