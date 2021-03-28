import axios from 'axios'
function getPost(type){
    console.log('call function ')
    return axios.get(`http://jsonplaceholder.typicode.com/${type}`).then(res => {
        console.log(res)
    })
}

module.exports = {
    printMsg: function () {
        console.log('this message is from demo-yongzhan-publishpkg');
    },
    getPost:getPost
}
