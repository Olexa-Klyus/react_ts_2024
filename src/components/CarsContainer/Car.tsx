import React from 'react';
import {useDispatch} from "react-redux";
import {carActions} from "../../store";

const Car = ({car}) => {
    const {id, brand, price, year} = car;

    const dispatch = useDispatch()
    return (
        <div>
            <div>id : {id}</div>
            <div>brand : {brand}</div>
            <div>price : {price}</div>
            <div>yeaar : {year}</div>
            <button onClick={()=>dispatch(carActions.setCarForUpdate(car))}>update</button>

        </div>
    );
};

export default Car;