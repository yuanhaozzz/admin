import React from 'react'

import errorImage from '../../assets/images/404/404.png'
import './404.css'

function routerError () {
    return (
        <div className="error">
            <img src={errorImage} alt=""/>
        </div>
    )
}

export default routerError