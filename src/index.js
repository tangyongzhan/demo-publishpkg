import axios from 'axios'
function getPost(type){
    console.log('call function ')
    return axios.get(`http://jsonplaceholder.typicode.com/${type}`).then(res => {
        console.log(res)
    })
}

export default getPost;
