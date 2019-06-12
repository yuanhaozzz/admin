

import { combineReducers } from 'redux'
import login from './login'
import layout from './layout'

export default combineReducers(
    {
        login,
        layout
    }
)