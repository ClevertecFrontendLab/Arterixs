import axios from 'axios';
import { BASE_URL } from '../utils/constants';

export const $api = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

$api.interceptors.request.use((config) => {
  const newConfig = config;
  newConfig.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return newConfig;
});
