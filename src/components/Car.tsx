import React from 'react';
import {ICarWithAuthModel} from "../models";

const Car = (car: ICarWithAuthModel) => {
    const {id, brand, year, price, photo} = car;
    return (
        <div>
            <div>id : {id}</div>
            <div>brand : {brand}</div>
            <div>year : {year}</div>
            <div>price : {price}</div>
            <div>photo : {photo}</div>
        </div>
    );
};

export default Car;

