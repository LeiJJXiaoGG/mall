import Mock from 'mockjs'

import multidata from './multidata'

import news from './news'
import pops from './pops'
import sells from './sells'


// 根据给定的url提取参数
function getValue(url, key) {
  var reg = new RegExp("(^|\\?|&)" + key + "=([^&]*)(\\s|&|$)", "i");
  if (reg.test(url))
    return unescape(RegExp.$2.replace(/\+/g, " "));
  return "";
}

Mock.mock('/home/multidata', 'get', {
  success: true,
  code: 6666,
  message: '操作成功',
  data: {
    multidata
  }
})

Mock.mock(/\/home\/data/, 'get', option => {

  //每页的记录数
  const size = 20

  let type = getValue(option.url, 'type')
  let page = getValue(option.url, 'page')
  let list
  if (type == 'new')
    list = news.data
  else if (type == 'pop')
    list = pops.data
  else list = sells.data

  let total = list.length
  list = list.slice((page - 1) * size, page * size)
  return {
    success: true,
    code: 6666,
    message: '操作成功',
    data: {
      list,
      total
    }
  }
})

