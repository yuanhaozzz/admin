import { TOKEN } from '../actionTypes'
// 定义state

let user = {
    token: ''
}

export default function (state = user, actions) {
    // eslint-disable-next-line default-case
    switch(actions.type) {
        case TOKEN: 
            let token = actions.token
            return {
                ...state,
                token
            }
        // 记住，reducer 必须有返回的state
        default:
            return state
    }
}