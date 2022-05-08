
import axios from 'axios'

const autoFetch = axios.create({
  baseURL:'https://course-api.com',
  headers:{
    Accept:'application/json'
  }
})

export default autoFetch