import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import { Link, Route, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import './aside.css'

const { SubMenu } = Menu;


class Aside extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
    }

    render() {
        let { status } = this.props
        return (
            <aside className={`aside ${status ? 'show-aside' : ''}`}>
                <LogoComponent {...this.props}></LogoComponent>
                <MenuComponent {...this.props}></MenuComponent>
            </aside>
        )
    }
}

let mapStateToProps = state => {
    let { layout } = state
    return {
        status: layout.status
    }
}

export default connect(
    mapStateToProps
)(Aside)



function LogoComponent(props) {
    let { status } = props
    return (
        <div className="aside-logo">
            <p className={status ? 'aside-hidden' : ''}>Welcome</p>
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
        let { route, status } = this.props
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
                                        <span className={status ? 'aside-hidden' : ''}>{routes.children[0].meta.title}</span>
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
                                            <span className={status ? 'aside-hidden' : ''}>{routes.menuName}</span>
                                        </span>
                                    }
                                >
                                    {
                                        routes.children.map(children => {
                                            if (!children.hide) {
                                                return (
                                                    <Menu.Item key={children.name} className={status ? 'aside-hidden' : ''}>
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