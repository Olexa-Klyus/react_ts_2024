import {IAuth, ITokens, IUser} from "../interfaces";
import {IRes} from "../types";
import {apiService} from "./apiService";
import {urls} from "../constants";

const _accessTokenFey = 'access';
const _refreshTokenFey = 'refresh';

const authService = {
    register(user: IAuth): IRes<IUser> {
        return apiService.post(urls.auth.register, user)
    },
    async login(user: IAuth): Promise<IUser> {
        const {data} = await apiService.post<ITokens>(urls.auth.login, user);
        this.setTokens(data);
        const {data:me}=await this.me();
        return me;
    },

    me(): IRes<IUser> {
        return apiService.get(urls.auth.me)
    },

    setTokens({refresh, access}: ITokens): void {
        localStorage.setItem(_accessTokenFey, access);
        localStorage.setItem(_refreshTokenFey, refresh);
    },

    getAccessToken(): string {
        return localStorage.getItem(_accessTokenFey);

    },

    getRefreshToken(): string {
        return localStorage.getItem(_refreshTokenFey);
    },

    deleteTokens():void{
        localStorage.removeItem(_accessTokenFey)
        localStorage.removeItem(_refreshTokenFey)
    }

}
export {
    authService
}