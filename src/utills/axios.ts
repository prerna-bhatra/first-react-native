import axios from "axios";
import {REACT_APP_BASE_LOCAL_URL} from "@env"

const baseUrl = '';

// console.log({b:process.env.REACT_APP_BASE_LOCAL_URL,baseUrl});


export const axiosInstance = axios.create({
  baseURL: `${baseUrl}/`,
});
