
// 代码分片  按需加载
import asyncComponent from './asyncComponent'

// let AsybcLayout = asyncComponent(() => import('../pages/login/Index'))
// 一级路由
export const PRIMAYR = [
    {
        path: '/root',
        component: asyncComponent(() => import('../pages/layout/Layout')),
        children: [
            {
                menuName: '首页',
                icon: 'home',
                children: [
                    {
                        path: '/root',
                        exact: true,
                        name: "dashboard",
                        meta: {
                            title: '首页'
                        },
                        component: asyncComponent(() => import('../pages/dashboard/Dashboard')),
                    }
                ]

            },
            {
                menuName: '文章相关',
                icon: 'form',
                children: [
                    {
                        path: '/root/article',
                        meta: {
                            title: '文章列表'
                        },
                        name: 'articleList',
                        component: asyncComponent(() => import('../pages/content/article/List')),
                    },
                    {
                        path: '/root/article/add',
                        meta: {
                            title: '文章新增'
                        },
                        hide: true,
                        name: 'articleAdd',
                        component: asyncComponent(() => import('../pages/layout/Layout')),
                    },
                    {
                        path: '/root/article/edit',
                        meta: {
                            title: '文章编辑'
                        },
                        hide: true,
                        name: 'articleEdit',
                        component: asyncComponent(() => import('../pages/layout/Layout')),
                    }
                ]
            }

        ]
    },
    {
        path: '/login',
        meta: {
            title: '登录'
        },
        component: asyncComponent(() => import('../pages/login/Login')),
    },
    {
        path: '/404',
        meta: {
            title: '错误'
        },
        component: asyncComponent(() => import('../pages/404/404')),
    },
    {
        path: '/',
        exact: true,
        meta: {
            title: '登录'
        },
        component: asyncComponent(() => import('../pages/login/Login')),
    },

]
