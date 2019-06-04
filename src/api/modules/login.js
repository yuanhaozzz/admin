
import { _path } from '../apiMap'
import { post, get } from '../api'

const PATHNAME = {
    login: _path('/a')
}

export default {
    async login (params) {
        console.log(_path('/a'))
        return await get(PATHNAME.login, params)
    }
}