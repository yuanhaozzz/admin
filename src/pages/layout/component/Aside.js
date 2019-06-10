import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import { Link, Route, NavLink } from 'react-router-dom'

import './aside.css'

const { SubMenu } = Menu;


class Aside extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
    }

    render() {
        let { route } = this.props
        console.log(route)
        return (
            <aside className="aside">
                <LogoComponent></LogoComponent>
                <MenuComponent {...this.props}></MenuComponent>
            </aside>
        )
    }
}
export default Aside



function LogoComponent() {
    return (
        <div className="aside-logo">
            <p>Welcome</p>
        </div>
    )
}

class MenuComponent extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
    }

    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    state = {
        openKeys: ['sub1'],
    };

    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    render() {
        let { route } = this.props
        console.log(this.props, '1111111111111')
        return (
            <Menu
                mode="inline"
                theme="light"
                defaultSelectedKeys={['首页']}
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}
            >
                {
                    route.map(routes => {
                        if (routes.children.length === 1) {
                            return (
                                <Menu.Item key={routes.menuName}>
                                    <NavLink to={routes.children[0].path}>
                                        <Icon type={routes.icon} />
                                        <span>{routes.children[0].meta.title}</span>
                                    </NavLink>
                                </Menu.Item>
                            )
                        } else {
                            return (
                                <SubMenu
                                    key={routes.menuName}
                                    title={
                                        <span>
                                            <Icon type={routes.icon} />
                                            <span>{routes.menuName}</span>
                                        </span>
                                    }
                                >
                                    {
                                        routes.children.map(children => {
                                            if (!children.hide) {
                                                return (
                                                    <Menu.Item key={children.name}>
                                                        <NavLink to={children.path}>{children.meta.title}</NavLink>
                                                    </Menu.Item>
                                                )
                                            }
                                        })
                                    }
                                </SubMenu>
                            )
                        }
                    })
                }
            </Menu>
        )
    }
}