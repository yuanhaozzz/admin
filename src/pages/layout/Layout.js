
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserInfo } from '../../redux/actions'

import Header from './component/Header'
import Aside from './component/Aside'
import Content from './component/Content'

import './layout.css'
class Layout extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
    }

    componentDidMount () {
        this.props.getUserInfo(2)
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

let mapStateToProps = state => {
    return state.login
}

export default connect(
    mapStateToProps,
    { getUserInfo }
)(Layout)