import axios from 'axios'

// 一般
axios.get('https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available')
    .then(res => {
        console.log(res.data)
    })

