
let host = window.location.host

let prefix = host.split('-')[0]

let baseApi = ''
// eslint-disable-next-line default-case
switch(prefix) {
    case 'dev':
        baseApi = 'http://dev'
        break
    case 'alpha':
        baseApi = 'http://alpha'
        break
    case 'rc':
        baseApi = 'http://rc'
        break
    default:
        baseApi = 'http://master'
        break
}

export let _path = path => baseApi + path