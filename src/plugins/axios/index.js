import axios from "axios";
import interceptors from './interceptors'

console.log(process.env.VUE_APP_API_URL)

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

interceptors(instance)

export default instance;