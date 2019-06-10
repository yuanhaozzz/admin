import React, { Component } from 'react'
import { Icon, Avatar, Badge } from 'antd'

import './header.css'

class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            menuShowStatus: false
        }
    }

    /**
     * 点击头部伸缩按钮时，调整菜单栏宽度 及 展示元素
     */
    handleMenu = e => {
        let isMenuShow = 'hidden'
        let antMenuItem = this.getElement('.ant-menu-item')
        let antMenuSubmenu = this.getElement('.ant-menu-submenu-title span span')
        let antMenuSubmenuArrow = this.getElement('.ant-menu-submenu-arrow')
        let asideLogo = this.getElement('.aside-logo p')
        let aside = document.querySelector('.aside')

        this.setState({
            menuShowStatus: !this.state.menuShowStatus
        })
        // 判断 菜单仅展示图标
        if (this.state.menuShowStatus) {
            isMenuShow = 'visible'
            aside.classList.remove('show-aside')
        } else {
            aside.classList.add('show-aside')

        }

        this.mapElement(antMenuSubmenu, isMenuShow)
        this.mapElement(antMenuItem, isMenuShow)
        this.mapElement(antMenuSubmenuArrow, isMenuShow)
        this.mapElement(asideLogo, isMenuShow)
    }

    /**
     * 获取元素
     * @params className  传递类名
     */
    getElement = className => {

        return Array.from(document.querySelectorAll((className)))
    }

    /**
    * 遍历后，对其DOM对象进行操作
    * @params arr  DOM数组
    * @params show 是否展示
    */
    mapElement = (arr, show = 'hidden') => {
        arr.map(item => item.style.visibility = show)
    }

    render() {
        return (
            <header className="header">
                <HeaderLeft handleMenu={this.handleMenu}></HeaderLeft>
                <HeaderRight></HeaderRight>
            </header>
        )
    }
}

function HeaderLeft(props) {

    function handleMenu() {
        props.handleMenu()
    }

    return (
        <div className="header-left">
            <Icon type="menu" style={{ fontSize: '24px' }} onClick={handleMenu} />
        </div>
    )
}

function HeaderRight() {
    return (
        <div className="header-right">

            <Badge count={35}>
                <Icon type="mail" style={{ fontSize: '20px' }} />
            </Badge>
            <Badge count={25}>
                <Icon type="bell" style={{ fontSize: '20px' }} />
            </Badge>
            <Badge dot color="yellow">
                <Avatar icon="user" shape="square" size="large" src="http://snsimg.ztjystore.cn/ztnew/ad/img/2019/06/10/1560132750655615.jpeg" />
            </Badge>

        </div>
    )
}

export default Header