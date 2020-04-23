import JSONP from 'jsonp'
import axios from 'axios'
import { message } from 'antd'

export default class Axios {
  static jsonp(options) {
    return new Promise((resolve, reject) => {
      JSONP(options.url, {
        param: 'callback'
      }, function (err, response) {
        if (response.status === 'success') {
          resolve(response)
        } else {
          // console.log(err)
          reject(response.message)
        }
      })
    })
  }

  static ajax(options) {
    const baseAPI = 'http://rap2.taobao.org:38080/app/mock/251789'
    return new Promise((resolve, reject) => {
      const configs = {
        url: options.url,
        method: options.method || 'get',
        baseURL: baseAPI,
        timeout: 30 * 1000,
        // withCredentials: true,
        headers: {'x-token': 'token'}
      }
      if (options.method === 'post') {
        configs.data = options.data || {}
      } else {
        configs.params = options.params || {}
      }
      axios(configs).then(response => {
        const res = response.data
        if (res.code === '0') {
          resolve(res)
        } else {
          message.error(res.errMsg)
          reject(res)
        }
      })
    })
  }
}