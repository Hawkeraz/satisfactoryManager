import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SATISFACTORY_API,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    'X-FRM-Authorization': import.meta.env.VITE_FICSIT
  },
});

export default axiosInstance;