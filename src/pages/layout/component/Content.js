import React from 'react'
import { Route } from 'react-router-dom'

import './content.css'
import Home from '../../dashboard/Dashboard'
import Article from '../../content/article/List'

function Content (props) {
    let { route } = props

    function handleRoutes () {
        let routes = []
        // 过滤所有子路由
        route.map(item => {
            routes.push(...item.children)
            
        })

        return routes.map(item => {
            return <Route key={item.name} path={item.path} exact={item.exact} component={item.component} ></Route>
        })
    }

    return (
        <div className="content">
            {
                handleRoutes()
            }
        </div>
    )
}
export default Content