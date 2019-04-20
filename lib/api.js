import axios from 'axios'

export default axios.create({
  baseURL: 'https://aqi.cloudian.in.th/api/',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
})
