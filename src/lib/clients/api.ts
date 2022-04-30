import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL
});

export { api };