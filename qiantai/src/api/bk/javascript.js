import request from '@/utils/request'

// 查询javascript列表
export function listJavascript(query) {
  return request({
    url: '/system/javascript/list',
    method: 'get',
    params: query
  })
}

// 查询javascript详细
export function getJavascript(id) {
  return request({
    url: '/system/javascript/' + id,
    method: 'get'
  })
}

// 新增javascript
export function addJavascript(data) {
  return request({
    url: '/system/javascript',
    method: 'post',
    data: data
  })
}

// 修改javascript
export function updateJavascript(data) {
  return request({
    url: '/system/javascript',
    method: 'put',
    data: data
  })
}

// 删除javascript
export function delJavascript(id) {
  return request({
    url: '/system/javascript/' + id,
    method: 'delete'
  })
}
