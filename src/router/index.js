import { createWebHashHistory, createRouter, createWebHistory } from 'vue-router';


const routes = [
    {
        path: '/login',
        component: () => import ( /* webpackChunkName: "index" */ "../views/login/login.vue"),
    },
    {
        path: '/register',
        component: () => import ( /* webpackChunkName: "index" */ "../views/login/register.vue"),
    },

    {
        path: '/',
        component: () => import ( /* webpackChunkName: "index" */ "../views/index.vue"),
        redirect: "/",
        children: [

            {
                path: "/",
                name: "home",
                component: () => import ( /* webpackChunkName: "home" */ "../views/home/home"),
                children:[
                    {
                        path: "/",
                        name: "index",
                        component: () => import ( /* webpackChunkName: "home" */ "../views/home"),
                    },
                    {
                        path: "/allBrands",
                        name: "allBrands",
                        component: () => import ( /* webpackChunkName: "home" */ "../views/home/allBrands"),
                    },
                    {
                        path: "/allCategory",
                        name: "allCategory",
                        component: () => import ( /* webpackChunkName: "home" */ "../views/home/allCategory"),
                    },
                    {
                        path: "/allSeller",
                        name: "allSeller",
                        component: () => import ( /* webpackChunkName: "home" */ "../views/home/allSeller"),
                    },
                    {
                        path: "/blog",
                        name: "blog",
                        component: () => import ( /* webpackChunkName: "home" */ "../views/home/blog"),
                    },
                    {
                        path: "/storeHome",
                        name: "storeHome",
                        component: () => import ( /* webpackChunkName: "home" */ "../views/storeHome/storeHome"),
                    },
                    {
                        path: "/productDetails",
                        name: "productDetails",
                        component: () => import ( /* webpackChunkName: "home" */ "../views/storeHome/productDetails"),
                    },
                    {
                        path: '/registerShop',
                        component: () => import ( /* webpackChunkName: "index" */ "../views/registerShop/registerShop.vue"),
                    },
                    {
                        path: '/payment',
                        component: () => import ( /* webpackChunkName: "index" */ "../views/payment/payment.vue"),
                    },
                    {
                        path: "/panelInfo",
                        name: "panelInfo",
                        redirect: "/panelInfo/userInfo",
                        component: () => import ( /* webpackChunkName: "home" */ "../views/myPanel/panelInfo"),
                        children:[
                            {
                                path: "/panelInfo/userInfo",
                                name: "userInfo",
                                component: () => import ( /* webpackChunkName: "home" */ "../views/myPanel/childPage/userInfo"),
                            },
                            {
                                path: "/panelInfo/addressManage",
                                name: "addressManage",
                                component: () => import ( /* webpackChunkName: "home" */ "../views/myPanel/childPage/addressManage"),
                            },
                            {
                                path: "/panelInfo/passwordManage",
                                name: "passwordManage",
                                component: () => import ( /* webpackChunkName: "home" */ "../views/myPanel/childPage/passwordManage"),
                            },
                            {
                                path: "/panelInfo/privacyManage",
                                name: "privacyManage",
                                component: () => import ( /* webpackChunkName: "home" */ "../views/myPanel/childPage/privacyManage"),
                            },
                            {
                                path: "/panelInfo/notifyCenter",
                                name: "notifyCenter",
                                component: () => import ( /* webpackChunkName: "home" */ "../views/myPanel/childPage/notifyCenter"),
                            },
                            {
                                path: "/panelInfo/buyHistory",
                                name: "buyHistory",
                                component: () => import ( /* webpackChunkName: "home" */ "../views/myPanel/childPage/buyHistory"),
                            },
                            {
                                path: "/panelInfo/myWallet",
                                name: "myWallet",
                                component: () => import ( /* webpackChunkName: "home" */ "../views/myPanel/childPage/myWallet"),
                            },
                            {
                                path: "/panelInfo/orderDetails",
                                name: "orderDetails",
                                component: () => import ( /* webpackChunkName: "home" */ "../views/myPanel/childPage/orderDetails"),
                            },
                        ]
                    },
                ]
            },
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
    routes
});

export default router
