import React, {FC, useEffect, useState} from 'react';

import {IUserModel} from "../../models/IUserModel";
import {userApiService} from "../../services/user.service";
import User from "./User";

const Users: FC<any> = () => {

    const [users, setUsers] = useState<IUserModel[]>([])

    useEffect(() => {
        userApiService.getAllUsers().then(({data}) => setUsers(data))
    }, []);

    return (
        <div>
            {users.map(user => <User key={user.id} user={user}></User>)}
        </div>
    );
};

export default Users;