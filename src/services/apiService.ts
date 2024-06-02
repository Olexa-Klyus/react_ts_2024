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

const authService = {
    authentication: async (authData: AuthDataModel): Promise<boolean> => {
        let response;
        try {
            response = await axiosInstance.post<ITokenObtainPair>('/auth', authData);
            localStorage.setItem('tokenPair', JSON.stringify(response.data));

        } catch (e) {
            console.log(e);
        }
        // user аутифікований, якщо в нього є access і refresh
        return !!(response?.data?.access && response?.data?.refresh);
    },
    // записуємо оновлену пару токенів
    refresh: async (refreshToken: string) => {
        const response = await axiosInstance.post<ITokenObtainPair>('/auth/refresh', {refresh: refreshToken});
        localStorage.setItem('tokenPair', JSON.stringify(response.data))
    },
}

const carService = {
    getCars: async (page: string) => {
        try {
            const response = await axiosInstance.get<ICarPaginatedModel>('/cars', {params: {page: page}});
            return response.data
        } catch
            (e) {
            const axiosError = e as AxiosError;
            if (axiosError?.response?.status === 401) {
                //закінчився токен - пробуємо оновити access token через refresh
                const refreshToken = retriveLocalStorageData<ITokenObtainPair>('tokenPair').refresh;
                await authService.refresh(refreshToken);
                await carService.getCars(page);
            }
            console.log(e)
        }
    }
}

export {
    authService,
    carService
}