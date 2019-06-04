import axios from 'axios'
import { message, Button } from 'antd';

const instance = axios.create({
    timeout: 10000
});

export function get (url, params={}) {
    new Promise((resolve, reject) => {
        instance.get(url, {
            params
        }).then(res => {
            resolve(res)
        }).catch(error => {
            message.error(error.message)
            reject(error)
        })
    })
}
export function post (url, params={}) {
    new Promise((resolve, reject) => {
        instance.post(url, {
            params
        }).then(res => {
            resolve(res)
        }).catch(error => {
            message.error(error.message)
            reject(error)
        })
    })
}

