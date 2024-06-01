import axios from "axios";
import {AuthDataModel} from "../models";
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
    refresh: () => {
    },
}

const carService = {
    getCars: async () => {
        try {
            await axiosInstance.get('/cars');
        } catch (e) {
            console.log(e)
        }
    }
}

export {
    authService,
    carService
}