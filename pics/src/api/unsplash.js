import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID REPLACE-WITH-UNSPLASH-ACCESS-KEY'
  }
});