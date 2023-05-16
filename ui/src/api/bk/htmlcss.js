import request from '@/utils/request'

// 查询htmlcss列表
export function listHtmlcss(query) {
  return request({
    url: '/system/htmlcss/list',
    method: 'get',
    params: query
  })
}

// 查询htmlcss详细
export function getHtmlcss(id) {
  return request({
    url: '/system/htmlcss/' + id,
    method: 'get'
  })
}

// 新增htmlcss
export function addHtmlcss(data) {
  return request({
    url: '/system/htmlcss',
    method: 'post',
    data: data
  })
}

// 修改htmlcss
export function updateHtmlcss(data) {
  return request({
    url: '/system/htmlcss',
    method: 'put',
    data: data
  })
}

// 删除htmlcss
export function delHtmlcss(id) {
  return request({
    url: '/system/htmlcss/' + id,
    method: 'delete'
  })
}
