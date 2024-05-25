import {apiService} from "./apiService";
import {urls} from "../constants";

const carService = {
    getAll: () => apiService.get(urls.cars.base),
    create: (data: any) => apiService.post(urls.cars.base, data),
    updateById: (id: number, data: any) => apiService.put(urls.cars.byId(id), data),
    deleteById: (id: number) => apiService.delete(urls.cars.byId(id))
};

export {
    carService
};