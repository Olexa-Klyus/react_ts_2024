import React, {useContext} from 'react';
import {Context1, useContextProvider} from "../context/ContextProvider";
import Users from "../components/Users";

const UsersPage = () => {
    // const context1 = useContext(Context1);
    const context1 = useContextProvider();

    console.log(context1)

    return (
        <div>
            <Users/>
        </div>
    );
};

export default UsersPage;