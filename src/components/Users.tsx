import React from 'react';
import {useContextProvider} from "../context/ContextProvider";
import User from "./User";

const Users = () => {

    const {userStore: {allUsers}} = useContextProvider();

    return (
        <div>
            {
                allUsers.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export default Users;