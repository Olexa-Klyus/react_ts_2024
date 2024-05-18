import axios from "axios";
import {baseURL} from "../constants/urls";

const apiService = axios.create("https://jsonplaceholder.typicode.com");

export {apiService}