import axios from 'axios';

const APIKEY = process.env.REACT_APP_APIKEY;

const userApi = (book, startIndex) => axios.create({
  baseURL: `https://www.googleapis.com/books/v1/volumes?q=${book}&startIndex=${startIndex}&maxResults=20&key=${APIKEY}`
});

export default userApi;