
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
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="layout">
                <Aside { ...this.props }></Aside>
                <main className="main">
                    <Header></Header>
                    <Content { ...this.props }></Content>
                </main>
            </div>
        )
    }
}

export default Layout