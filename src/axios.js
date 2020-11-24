import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://181.49.2.100:30443',
});

//axiosInstance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';
axiosInstance.defaults.headers = {"Access-Control-Allow-Origin": "*"};

export default axios;