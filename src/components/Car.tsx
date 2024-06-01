import React from 'react';
import {ICarWithAuthModel} from "../models";

const Car = (car: ICarWithAuthModel) => {
    const {id, brand, year, price, photo} = car;
    return (
        <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Car;