import React, {useContext} from 'react';
import C from "./C";
import {Context} from "../App";

const B = () => {
    const value = useContext(Context);
    return (
        <div>
            <h2>B : {value}</h2>
            <C/>
        </div>
    );
};

export default B;