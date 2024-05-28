import {baseUrl} from "../constants";

const apiService = axios.create({baseUrl});

export {
    apiService
}