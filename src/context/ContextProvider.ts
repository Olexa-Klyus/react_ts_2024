import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {create} from "zustand";

type StoreType = {
    userStore: {
        allUsers: IUserModel[],
        setAllUsers: (user: IUserModel[]) => void,

        favoriteUser: IUserModel | null,
        setFavoriteUser: (obj: IUserModel) => void
    },
    postStore: { allPosts: IPostModel[] },
}

// для початку роботи потрібно створити функцію за доп метода create()
// назва useStore - довільна

export const useStore = create<StoreType>()(
    (set) => {
        return {
            userStore: {
                allUsers: [],
                setAllUsers: (users: IUserModel[]) => {
                    return set((state: StoreType) => {
                        return {
                            ...state, userStore: {
                                ...state.userStore,
                                allUsers: users
                            }
                        }
                    })
                },

                favoriteUser: null,
                setFavoriteUser: (user:IUserModel) => {
                    return set((state: StoreType) => {
                        return {
                            ...state,
                            userStore: {
                                ...state.userStore,
                                favoriteUser: user
                            }
                        }
                    })
                }
            },
            postStore: {
                allPosts: []
            }
        }
    });