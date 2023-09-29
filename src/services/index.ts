import axios from 'axios';

// Create an instance of Axios with a base URL
const instance = axios.create({
  baseURL: 'http://127.0.0.1:4010', // Replace with your base URL
});

export default instance