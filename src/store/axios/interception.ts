import axios from 'axios';

export const API_URL = 'https://strapi.cleverland.by/api'

export const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL
})

$api.interceptors.request.use((config) => {
  const newConfig = config
  newConfig.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return newConfig
})
