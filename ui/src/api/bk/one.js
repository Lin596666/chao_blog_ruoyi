import request from '@/utils/request'

// 查询bkreactone列表
export function listOne(query) {
  return request({
    url: '/system/one/list',
    method: 'get',
    params: query
  })
}

// 查询bkreactone详细
export function getOne(id) {
  return request({
    url: '/system/one/' + id,
    method: 'get'
  })
}

// 新增bkreactone
export function addOne(data) {
  return request({
    url: '/system/one',
    method: 'post',
    data: data
  })
}

// 修改bkreactone
export function updateOne(data) {
  return request({
    url: '/system/one',
    method: 'put',
    data: data
  })
}

// 删除bkreactone
export function delOne(id) {
  return request({
    url: '/system/one/' + id,
    method: 'delete'
  })
}
