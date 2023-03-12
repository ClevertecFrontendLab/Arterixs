import axios from 'axios';
import { BASE_URL } from '../utils/constants';

export const $apiBase = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});
