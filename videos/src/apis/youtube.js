import axios from 'axios';
import youtubeAccessKey from './youtubeKey.json'

const KEY = youtubeAccessKey.key;

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})