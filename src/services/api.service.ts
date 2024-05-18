import axios from "axios";
import {baseURL} from "../constants/urls";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {}
});

const apiService = axios.create({baseURL: 'https://jsonplaceholder.typicode.com/'});
console.log(apiService)

export {
    apiService,
    axiosInstance
}