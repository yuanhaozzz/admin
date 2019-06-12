import React, { Component } from 'react'
import { PRIMAYR } from '../router/index'
class Guard extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        this.state = {
            routes: []
        }
    }
    componentWillMount() {
        this.concatRoute()
    }

    /**
     * 取出全部路由，方便查找匹配路由
     */
    concatRoute = e => {
        let routes = []
        // 找出所有子路由
        PRIMAYR.map(item => {
            routes.push(item)
            if (item.children) {
                item.children.map(children => {
                    routes.push(...children.children)
                })
            }
        })
        this.setState({
            routes
        })
    }
    /**
     *  查找当前路由是否存在 及 返回
     *  @param  {string}     path   要查找的路由路径  
     *  @param  {array}     routes  数据源
     * 
     *  @return {string}    返回匹配的路由 或 undefined
     */
    findRoute = (routes, path) => {
        return routes.find(item => item.path === path)
    }

    render() {
        let { routes } = this.state
        let { location } = this.props
        let isLogin = JSON.parse(localStorage.getItem('login'))
        // 查找当前路由路径
        let router = {
            matchCurrentRoute: this.findRoute(routes, location.pathname),
            login: this.findRoute(routes, '/login'),
            root: this.findRoute(routes, '/root'),
            errorPage: this.findRoute(routes, '/404')
        }
        // 跳转登录页面
        if (!isLogin) {
            return <router.login.component />
        }

        if (!router.matchCurrentRoute) {
            return <router.errorPage.component {...this.props} />
        }
        // 嵌套路由，在root组件内有子路由 所以在匹配到父路由时，直接返回子路由
        if (location.pathname.includes('root')) {
            return <router.root.component {...this.props} />
        }
        // 已登录 且 路由存在
        return (
            <router.matchCurrentRoute.component {...this.props} />
        )

    }

}

export default Guard
