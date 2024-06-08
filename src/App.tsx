import React, {useEffect, useState} from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import Header from "./components/Header";
import {postService, userService} from "./services/apiService";
import {Context1} from "./context/ContextProvider";
import {IUserModel} from "./models/IUserModel";
import {IPostModel} from "./models/IPostModel";

// зробили в APP, бо неохота було MainLayout робити

const App = () => {
    const [users, setUsers] = useState<IUserModel[]>([]);
    const [posts, setPosts] = useState<IPostModel[]>([]);
    const [favoriteUserState, setFavoriteUserState] = useState<IUserModel | null>(null);

    useEffect(() => {
        userService.getUsers().then(value => setUsers(value.data));
        postService.getPosts().then(value => setPosts(value.data));
    }, []);

    // якщо ми хочемо відобразити обраного юзера десь а проекті, можна зробити ліфт-функцію,додати її в контекст,
    // тобто зробити можливість викликати її через контекуст в нижній компоненті, звідки вона повертає юзера і
    // сетить його
    // а потім цей сет ми знову витягуємо через контекст де нам треба

    const lift = (obj: IUserModel) => {
        setFavoriteUserState(obj);
    }

    return (
        <div>
            <Header/>
            <Context1.Provider value={{
                userStore: {
                    allUsers: users,
                    setFavoriteUser: (obj: IUserModel) => {
                        lift(obj)
                    }
                },
                postStore: {
                    allPosts: posts
                }
            }}>
                <Outlet/>
            </Context1.Provider>

            <hr/>
            {favoriteUserState && <div>{favoriteUserState.email}</div>}
            <hr/>

        </div>
    );
}

export default App;
