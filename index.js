import request from './src/utils/request.js'

// 简单使用
// axios.get('https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available')
//     .then(res => {
//         console.log(res.data)
//     })

request({
    url: '/pet/findByStatus',
    params: {
        status: 'available'
    }
}).then(res => {
    console.log(res.data)
})
