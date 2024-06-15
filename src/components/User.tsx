import React, {FC} from 'react';
import {IUser} from "../models";
import {useNavigate} from "react-router-dom";

interface IProps {
    user: IUser;
}

const User: FC<IProps> = ({user}) => {
    const navigate=useNavigate();
    return (
        <div>
            {user.id}   :    {user.name}
            <button onClick={()=>{
                navigate(`${user.id}`)
            }}>details</button>
        </div>
    );
};

export default User
