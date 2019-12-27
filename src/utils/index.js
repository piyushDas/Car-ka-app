import {
  GET_CALL,
  POST_CALL,
  // LOCAL_BASE_URL
} from '../constants/index'
import Axios from 'axios'

export const hcAxiosInstance = (url, method, token, data) => {
  let instance
  const config = {
    timeout: 120000,
    headers: {
      source: 'hc',
      'Content-Type': 'application/json'
    }
  }
  if (token) {
    config.headers.token = `Bearer ${token}`
  }
  if (method.toLowerCase() === GET_CALL) {
    instance = Axios.get(url, {
      params: data,
      headers: config.headers
    })
  } else if (method.toLowerCase() === POST_CALL) {
    instance = Axios.post(url, data, config)
  }
  return instance
}

export const checkSignIn = (userObj, setUser) => {
  if(['/', '', '/unsigned'].indexOf(window.location.pathname) < 0){
    if (!userObj.authToken) {
      setUser({})
      const path = window.location.pathname
      window.location.href = window.location.origin + "/unsigned?redirectTo=" + path
    }
  }
}
