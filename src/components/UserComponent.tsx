import React, {FC} from 'react';
import {IUserModel} from "../models/IUserModel";
import {NavLink, useNavigate} from "react-router-dom";

interface IProps {
    user: IUserModel;
}

// в state можна передати обєкт
// а в дочірньому відхопити за допомогою useLocation();
// або створити callback функцію useNavigate і в неї це все вкласти

const UserComponent: FC<IProps> = ({user}) => {
    const navigate = useNavigate()

    return (
        <div>
            <div>
                <NavLink to={user.id.toString()} state={{user}}> {user.name}</NavLink>

                <button onClick={() => navigate(user.id.toString(), {state: {user}})}>
                    show posts
                </button>
            </div>
        </div>
    );
};

export default UserComponent;