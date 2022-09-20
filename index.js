import {
    petFindByStatus,
    petFindByTags
} from './src/api/pet.js'

// 简单使用
// axios.get('https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available')
//     .then(res => {
//         console.log(res.data)
//     })

petFindByStatus({
    status: 'available'
}).then(res => {
    console.log(res.data)
})
