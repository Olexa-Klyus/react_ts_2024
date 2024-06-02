import React, {useContext} from 'react';
import {Context} from "../App";

const C = () => {
    const value = useContext(Context);
    return (
        <div>
            <h2>C : {value}</h2>
        </div>
    );
};

export default C;