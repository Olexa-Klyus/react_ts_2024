import React, {FC} from 'react';
import {IUserModel} from "../models/IUserModel";
import {NavLink} from "react-router-dom";

interface IProps {
    user: IUserModel;
}

const UserComponent: FC<IProps> = ({user}) => {
    return (
        <div>
            <div>
                // в state можна передати обєкт
                // а в дочірньому відхопити за допомогою useLocation();
                <NavLink to={user.id.toString()} state={{user}}> {user.name}</NavLink>
            </div>
        </div>
    );
};

export default UserComponent;