import {IAuth} from "../interfaces";
import {IRes} from "../types";
import {IUser} from "../interfaces/userInterface";
import {apiService} from "./apiService";
import {urls} from "../constants";

const authService = {
    register(user: IAuth): IRes<IUser> {
        return apiService.post(urls.auth.register, user)
    }
}
export {
    authService
}