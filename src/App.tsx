import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./redux/store";
import {postActions, userActions} from "./redux/slices";

const App = () => {
    const dispatch = useAppDispatch();
    const {userSlice: {users, isLoaded}, postSlice: {posts},} = useAppSelector(state => state);

    useEffect(() => {
        dispatch(userActions.loadUsers());
        dispatch(postActions.loadPosts());
    }, []);

    return (
        <div>
            {isLoaded ? users.map(user =>
                    <div key={user.id}>
                        {user.name} :
                        {user.email}
                    </div>)
                : <h2>Loading...</h2>}

            <hr/>
            {posts.map(post =>
                <div key={post.id}>
                    {post.title} :
                </div>)}
        </div>
    );
};

export default App;
