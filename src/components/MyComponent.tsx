import React, {FC} from 'react';

interface IProps{
    children:any
}

const MyComponent:FC<IProps> = ({children}) => {

    return (
        <div>
            <h2>MyComponent</h2>
            <hr/>
            {children}
        </div>
    );
};

export default MyComponent;