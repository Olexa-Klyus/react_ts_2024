import React from 'react';
import B from "./B";
import {useAppContext} from "../hooks/useAppContext";

const A = () => {
    const value = useAppContext();
    return (
        <div>
            <h2>A : {value}</h2>
            <B/>
        </div>
    );
};

export default A;
