import request from '../utils/request.js'

export function petFindByStatus(params) {
    return request({
        url: '/pet/findByStatus',
        params
    })
}

export function petFindByTags(params) {
    return request({
        url: '/pet/findByTags',
        params
    })
}
