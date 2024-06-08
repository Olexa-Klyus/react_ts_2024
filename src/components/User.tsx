import React, {FC} from 'react';
import {IUserModel} from "../models/IUserModel";
import {useStore} from "../context/ContextProvider";

interface IProps {
    user: IUserModel
}

const User: FC<IProps> = ({user}) => {
    const {userStore: {setFavoriteUser}} = useStore();
    return (
        <div>
            {user.id} {user.name}
            <button onClick={() => {
                setFavoriteUser(user);
            }}>set as favorite
            </button>
        </div>
    );
};

export default User;