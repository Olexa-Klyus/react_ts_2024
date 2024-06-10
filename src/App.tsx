import React, {useEffect} from 'react';
import {postActions, useAppDispatch, useAppSelector, userActions} from "./redux/store";

const App = () => {
    const dispatch = useAppDispatch();
    const {userSlice: {users}, postSlice: {posts}} = useAppSelector(state => state);

    useEffect(() => {
        dispatch(userActions.loadUsers());
        dispatch(postActions.loadPosts());
    }, []);

    return (
        <div>
            {users.map(user =>
                <div key={user.id}>
                    {user.name} :
                    {user.email}
                </div>)}
            <hr/>
            {posts.map(post =>
                <div key={post.id}>
                    {post.title} :
                </div>)}
        </div>
    );
};

export default App;
