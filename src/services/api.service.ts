import axios from "axios";
import {baseURL} from "../constants/urls";

const apiService = axios.create({baseURL});
console.log(baseURL)
console.log({baseURL})

export {apiService}