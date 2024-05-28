import {apiService} from "./apiService";
import {urls} from "../constants";

const carService={
    getAll:()=>apiService.get(urls.cars.base)
}