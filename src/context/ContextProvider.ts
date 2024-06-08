import {createContext, useContext} from "react";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";

type StoreType = {
    userStore: {
        allUsers: IUserModel[],
        setFavoriteUser: (obj: IUserModel) => void
    },
    postStore: { allPosts: IPostModel[] },
}

export const defaultValue: StoreType =
    {
        userStore: {
            allUsers: [],
            setFavoriteUser: () => {
            }
        }
        ,
        postStore: {
            allPosts: []
        }
    }
export const Context1 = createContext<StoreType>(defaultValue);

// щоб було менше імпортів створюємо власний хук
export const useContextProvider = (): StoreType => {
    return useContext(Context1);
}