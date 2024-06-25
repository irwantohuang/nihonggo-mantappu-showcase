export const routes = [
    {
        path: "/home",
        name: "Home",
        component: () => import('../pages/HomePage.vue')
    },
    {
        path: "/about",
        name: "About",
        component: () => import('../pages/AboutPage.vue')
    },
    {
        path: "/content",
        name: "Content",
        component: () => import('../pages/ContentPage.vue')
    },

]