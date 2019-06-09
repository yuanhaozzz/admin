
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
                path: '/dashboard',
                exact: true,
                meta: {
                    title: '首页'
                },
                component: asyncComponent(() => import('../pages/dashboard/Dashboard')),
            },
            {
                path: '/content/article',
                meta: {
                    title: '文章列表'
                },
                component: asyncComponent(() => import('../pages/content/article/List')),
            },
            {
                path: '/content/article/add',
                meta: {
                    title: '文章新增'
                },
                component: asyncComponent(() => import('../pages/layout/Layout')),
            },
            {
                path: '/content/article/edit',
                meta: {
                    title: '文章编辑'
                },
                component: asyncComponent(() => import('../pages/layout/Layout')),
            },
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
        path: '/',
        exact: true,
        meta: {
            title: '登录'
        },
        component: asyncComponent(() => import('../pages/login/Login')),
    },
    
]
