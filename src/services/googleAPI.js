import axios from 'axios';

const APIKEY = process.env.REACT_APP_APIKEY;

const userApi = (book) => axios.create({
  baseURL: `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${APIKEY}`
});

export default userApi;