import React, { Component } from 'react'
import { Icon, Avatar, Badge } from 'antd'
import { connect } from 'react-redux'

import { handleHeaderButton } from '../../../redux/actions'
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
        let { status,  handleHeaderButton} = this.props
        handleHeaderButton(!status)
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


let mapStateToProps = state => {
    let { layout } = state 
    return {
        status: layout.status
    }
}

export default connect(
    mapStateToProps,
    { handleHeaderButton }
)(Header) 