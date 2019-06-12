import { createStore } from 'redux'
import reducer from './reducers/index'

// 创建sotre 连接reducers
export default createStore(reducer)