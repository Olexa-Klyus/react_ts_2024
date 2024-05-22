import React from 'react';

const MyComponent = ({children}) => {

    return (
        <div>
            <h2>MyComponent</h2>
            <hr/>
            {children}
        </div>
    );
};

export default MyComponent;