import axios, {AxiosResponse} from "axios";
import Carts from "../components/Carts/Carts";
import {CartModel} from "../models/CartModel";
import {CartsResponseModel} from "../models/CartsResponseModel";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/',
    headers: {}
});

const getAllCarts = ():Promise<AxiosResponse<CartsResponseModel>> => {
    return axiosInstance.get('/carts')
}
const getSingleCart = ():Promise<AxiosResponse<CartsResponseModel>> => {
    return axiosInstance.get('/carts/'+ id)
}

export {getAllCarts}