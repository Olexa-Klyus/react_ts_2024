import React, {useEffect, useMemo, useState} from 'react';
import {UserWithPostsType} from "../models/UserWithPostsType";
import {useStore} from "../context/ContextProvider";

const UserPosts = () => {
    const {postStore: {allPosts}, userStore: {allUsers}} = useStore();

    const [usersWithPosts, setUsersWithPosts] = useState<UserWithPostsType[]>([])

    // формуємо логіку для повернення масиву підпорядкованих постів
    // це важкий код для виконання, тому робимо йому useMemo

    // це буде псевдомасив, для того щоб промапити його потім, пропускаємо через useState + useEffect
    const userWithPostArray = useMemo(() => {
        return () => {
            return allUsers.map(user => {
                const posts = allPosts.filter(post => post.userId === user.id);
                return {...user, posts};
            });
        }
    }, [allPosts, allUsers]);

    useEffect(() => {
        setUsersWithPosts(userWithPostArray)
    }, [userWithPostArray]);

    return (
        <div>
            {
                usersWithPosts.map(user => <div key={user.id}>
                    <div>{user.name}</div>
                    <ul>
                        {
                            user.posts.map(post => <li key={post.id}> {post.title}</li>)
                        }
                    </ul>
                </div>)
            }
        </div>
    );
};

export default UserPosts;