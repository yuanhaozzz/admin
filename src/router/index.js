
// 代码分片  按需加载
import asyncComponent from './asyncComponent'

let AsybcLayout = asyncComponent(() => import('../pages/login/Index'))
// 一级路由
export const PRIMAYR = [
    {
        path: '/',
        exact: true,
        component: AsybcLayout
    },
    {
        path: '/login',
        exact: true,
        component: AsybcLayout
    }
]
