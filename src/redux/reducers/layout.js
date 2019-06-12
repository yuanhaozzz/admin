import { HEADER_BUTTON } from '../actionTypes'

// state
let layout = {
    status: false
}

export default function (state = layout, actions) {
    switch (actions.type) {
        case HEADER_BUTTON:
            let { status } = actions
            return {
                ...state,
                status
            }
        default: 
        return state
    }
}