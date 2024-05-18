import React, {FC} from 'react';

let users = [
    {name: 'Vasya', age: 31, status: false},
    {name: 'Petya', age: 25, status: true},
    {name: 'Kolya', age: 45, status: true},
    {name: 'Anya', age: 28, status: false},
]

const UsersComponent: FC<any> = ({lift}) => {

    return (
        <div style={{border: '1px solid', background: 'silver'}}>
            {users.map((user, index) => (<div key={index}>{user.name}
                <button onClick={() => {
                    lift(user)
                }}>User
                </button>
            </div>))}
        </div>
    );
};

export default UsersComponent;