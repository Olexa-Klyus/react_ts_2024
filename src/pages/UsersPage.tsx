import React from 'react';
import {useAppSelector} from "../redux/store";

const UsersPage = () => {
    const {users, isLoaded} = useAppSelector(state => state.userSlice);

    return (
        <div>
            {isLoaded ? users.map(user =>
                    <div key={user.id}>
                        {user.name} :
                        {user.email}
                    </div>)
                : <h2>Loading...</h2>}

        </div>
    );
};

export default UsersPage;