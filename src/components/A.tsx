import React, {useContext} from 'react';
import B from "./B";
import {Context} from "../App";

const A = () => {
    const value = useContext(Context);
    return (
        <div>
            <h2>A : {value}</h2>
            <B/>
        </div>
    );
};

export default A;
