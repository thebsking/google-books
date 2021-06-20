import axios from 'axios';
const apiUrl = 'GET https://www.googleapis.com/books/v1/volumes?q=';
const apiKey = '&key=AIzaSyAMDq5JmANxD425cYbIq4lA49V-6mTpLYY';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    searchGoogle: function(query){
        const stringed = query.split(' ').join('+');
        return axios.get(apiUrl + stringed + apiKey)
    }
}
