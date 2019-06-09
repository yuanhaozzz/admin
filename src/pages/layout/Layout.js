
import React, { Component } from 'react'
import { Route, NavLink, Link, Switch } from 'react-router-dom'
import { Button } from 'antd';


import { SECONDARY } from '../../router/index'

import Header from './component/Header'
import Aside from './component/Aside'
import Content from './component/Content'
import Article from '../content/article/List'

import Dashboard from '../dashboard/Dashboard'

import './layout.css'
class Layout extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { match, route } = this.props
        return (
            <div className="layout">
                <Aside { ...this.props }></Aside>
                <main className="layout-main">
                    <Header></Header>
                    <Content></Content>
                </main>


                {/* <div className="layout-content">
                    <div className="layout-content-sidebar">
                    <Link to="/root/">首页</Link>
                    <Link to="/root/dashboard">列表</Link>
                    </div>

                    <div className="layout-content-main">
                    <Route exact path="/root/" component={Dashboard} />
                    <Route path="/root/dashboard/" component={Article} />
                    </div>
                </div> */}


            </div>
        )
    }
}

export default Layout