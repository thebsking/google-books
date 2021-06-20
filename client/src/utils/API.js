import axios from 'axios';
const apiUrl = 'GET https://www.googleapis.com/books/v1/volumes?q=';
const apiKey = process.env.BOOKS_API;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    searchGoog: function(query){
        console.log(apiUrl + query + apiKey)
        return axios.get(apiUrl + query + apiKey)
    }
}
