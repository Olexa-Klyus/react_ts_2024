import React, {FC} from 'react';
import {IUser} from "../models";
import {useNavigate} from "react-router-dom";

interface IProps {
    user: IUser
}

const User: FC<IProps> = ({user}) => {
    const navigate=useNavigate();

    return (
        <div>
            {user.id} - {user.username}
            <button onClick={()=>{
                navigate(user.id.toString())
            }}>Details</button>
        </div>
    );
};

export default User;