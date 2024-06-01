import React, {FC} from 'react';
import {ICarWithAuthModel} from "../models";

interface IProps{
    car:ICarWithAuthModel
}
const Car: FC<IProps> = ({car}) => {
    const {id, brand, year, price, photo} = car;
    return (
        <div>
            <div>id : {id}</div>
            <div>brand : {brand}</div>
            <div>year : {year}</div>
            <div>price : {price}</div>
            <div>photo : {photo}</div>
            <hr/>
        </div>
    );
};

export default Car;

