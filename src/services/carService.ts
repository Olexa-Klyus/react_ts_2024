import {apiService} from "./apiService";
import {urls} from "../constants";
import {IResType} from "../types";
import {ICar} from "../interfaces";

const carService = {
    getAll: (): IResType<ICar[]> => apiService.get(urls.cars.base),
    create:(data:ICar):IResType<ICar>=>apiService.post(urls.cars.base,data),
    updateById:(id:number,data:ICar):IResType<ICar>=>apiService.put(urls.cars.byId(id),data),
    deleteById:(id:number):IResType<void>=>apiService.delete(urls.cars.byId(id))
}

export {
    carService
}