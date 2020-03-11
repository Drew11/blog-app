import axios from 'axios';

class SimpleBlogApiService {

    // url = 'https://simple-blog-api.crew.red/';
    url = `https://jsonplaceholder.typicode.com/`;
    getAllPosts = async ()=> {
       const response = await axios.get(`${this.url}posts`);
       const res = await response.data;
       console.log(res)
       return res;
    }
}
export  default SimpleBlogApiService;