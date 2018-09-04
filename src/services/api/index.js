import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-iddog.idwall.co',
  headers: { 'Content-Type': 'application/json' },
})

export default api;
