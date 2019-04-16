import axios from 'axios'

const KEY = 'AIzaSyC8KpP5KnAmu7M7ZXm4NrldN0KZ9otf1K0'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: '5',
    key: KEY
  }
})
