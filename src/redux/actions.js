import { TOKEN } from './actionTypes'
import { HEADER_BUTTON } from './actionTypes'

export let getUserInfo = token => ({
    type: TOKEN,
    token
})

export let handleHeaderButton = status => ({
    type: HEADER_BUTTON,
    status
})