import axios from 'axios';
import accessKey from './accessKey.json';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${accessKey.key}`
  }
});