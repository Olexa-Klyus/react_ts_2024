import {AxiosResponse} from "axios";

export type IResponceType<T> = Promise<AxiosResponse<T>>