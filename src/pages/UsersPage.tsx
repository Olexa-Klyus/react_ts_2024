import React, {useContext} from 'react';
import {Context1} from "../context/ContextProvider";

const UsersPage = () => {
    const context1 = useContext(Context1);
    console.log(context1)

    return (
        <div>
            UsersPage

        </div>
    );
};

export default UsersPage;