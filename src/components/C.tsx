import React from 'react';
import {useAppContext} from "../hooks/useAppContext";

const C = () => {
    const value = useAppContext();
    return (
        <div>
            <h2>C : {value}</h2>
        </div>
    );
};

export default C;