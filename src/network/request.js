import axios from 'axios'

export function request(config) {

  //创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 3000
  })

  //请求拦截
  instance.interceptors.request.use(config => {
    return config;
  }, error => {

  })
  //响应拦截
  instance.interceptors.response.use(res => {
    return res.data;
  }, error => {

  })

  //发送真正的网络请求 本身返回值就是promise
  return instance(config);

}
