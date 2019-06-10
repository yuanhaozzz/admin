import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import { BrowserRouter as Router, Switch, Link, Redirect } from 'react-router-dom'
import { PRIMAYR } from '../router/index'

class Guard extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        this.state = {
            routes: []
        }
    }

    componentWillMount () {
        console.log(this.props)
    }

    handleRoutes = () => {
        let routes = []
        // 过滤所有子路由
        PRIMAYR.map(item => {
            routes.push(...item.children)
            
        })
        console.log(routes)
        this.setState({
            routes
        })
    }

    

    render() {
        let routes = []
        // 过滤所有子路由
        PRIMAYR.map(item => {
            if (item.children) {
                routes.push(...item.children)
            }
           
        })
        debugger
        console.log(routes)

        let { location } = this.props
        let isLogin = JSON.parse(localStorage.getItem('login'))
        // 查找当前路由路径
        let matchCurrentRoute = routes.find(routes => routes.path === location.pathname)
        let routerError = routes.find(routes => routes.path === '/404')

        let login = routes.find(routes => routes.path === '/login')

        // 路由路径不存在展示404
        if (!matchCurrentRoute) {
            return (
                <routerError.component></routerError.component>
            )
        }

        // 跳转登录页面
        if (!isLogin) {
            return <login.component></login.component>
        }

        // 已登录 且 路由存在
        return (
                <matchCurrentRoute.component {...this.props}/>
        )
    }

}

export default Guard
