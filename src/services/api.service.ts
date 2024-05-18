import axios from "axios";
import {baseURL} from "../constants/urls";

let apiService = axios.create({baseURL});

export {apiService}