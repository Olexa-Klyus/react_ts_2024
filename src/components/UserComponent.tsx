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
                <NavLink to={user.id.toString()}> {user.name}</NavLink>
            </div>
        </div>
    );
};

export default UserComponent;