import React from 'react';
import {useAppSelector} from "../redux/store";
import Users from "../components/Users";

const UsersPage = () => {

    return (
        <div>
            <Users/>
        </div>
    );
};

export default UsersPage;