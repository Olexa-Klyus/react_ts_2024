import axios from "axios";
import {AuthDataModel} from "../models";
import {ITokenObtainPair} from "../models";

const axiosInstance = axios.create({
    baseURL: 'http://owu.lincpc.net/carsAPI/v2',
    headers: {}
});

const authService = {
    authentication: async (authData: AuthDataModel): Promise<boolean> => {
        let response;
        try {
            response = await axiosInstance.post<ITokenObtainPair>('/auth', authData);
        } catch (e) {
            console.log(e);
        }
        // user аутифікований, якщо в нього є access і refresh
        return !!(response?.data?.access && response?.data?.refresh);
    },
    refresh: () => {
    },
}

export {
    authService
}