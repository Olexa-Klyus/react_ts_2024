import axios, {AxiosError} from "axios";
import {AuthDataModel, ICarPaginatedModel} from "../models";
import {ITokenObtainPair} from "../models";
import {retriveLocalStorageData} from "../helpers";

const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2',
    headers: {}
});

// перехоплюємо request і додаємо headers, виносимо чавстину коду в helpers
axiosInstance.interceptors.request.use(request => {
    if (localStorage.getItem('tokenPair') && (request.url !== '/auth' && request.url !== '/auth/refresh')) {
        const iTokenObtainPair = retriveLocalStorageData<ITokenObtainPair>('tokenPair');
        request.headers.set('Authorization', 'Bearer ' + iTokenObtainPair.access)
    }
    return request;
})

// виносимо обробку помилок звідси в CarsPage, щоб мати можливість робити редіректи, авторефреші і т.д.
const authService = {
    authentication: async (authData: AuthDataModel): Promise<boolean> => {
        const response = await axiosInstance.post<ITokenObtainPair>('/auth', authData);
        localStorage.setItem('tokenPair', JSON.stringify(response.data));
        // user аутифікований, якщо в нього є access і refresh
        return !!(response?.data?.access && response?.data?.refresh);
    },
    // записуємо оновлену пару токенів, але refreshToken беремо з localStorage
    refresh: async () => {
        const refreshToken = retriveLocalStorageData<ITokenObtainPair>('tokenPair').refresh;
        const response = await axiosInstance.post<ITokenObtainPair>('/auth/refresh', {refresh: refreshToken});
        localStorage.setItem('tokenPair', JSON.stringify(response.data))
    }
}

const carService = {
    getCars: async (page: string = '1') => {
        const response = await axiosInstance.get<ICarPaginatedModel>('/cars', {params: {page: page}});
        return response.data
    }
}

export {
    authService,
    carService
}