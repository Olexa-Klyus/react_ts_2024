import axios from "axios";
import {baseURL} from "../constants/urls";

let axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {}
});
export {axiosInstance}