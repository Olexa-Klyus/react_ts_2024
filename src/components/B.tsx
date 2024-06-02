import React from 'react';
import C from "./C";
import {useAppContext} from "../hooks/useAppContext";

const B = () => {
    const value = useAppContext();
    return (
        <div>
            <h2>B : {value}</h2>
            <C/>
        </div>
    );
};

export default B;