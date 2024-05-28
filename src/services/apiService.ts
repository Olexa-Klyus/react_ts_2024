import {baseUrl} from "../constants";
import axios from "axios";

const apiService = axios.create({baseUrl});

export {
    apiService
}