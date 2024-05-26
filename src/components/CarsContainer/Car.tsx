import React from 'react';
import {useDispatch} from "react-redux";
import {carActions} from "../../store";
import {carService} from "../../services";

const Car = ({car}) => {
    const {id, brand, price, year} = car;

    const deleteById=async ()=>{
        await carService.deleteById(id)
        dispatch(carActions.trigger())
    };

    const dispatch = useDispatch()
    return (
        <div>
            <div>id : {id}</div>
            <div>brand : {brand}</div>
            <div>price : {price}</div>
            <div>yeaar : {year}</div>
            <button onClick={()=>dispatch(carActions.setCarForUpdate(car))}>update</button>
            <button onClick={()=>deleteById()}>delete</button>

        </div>
    );
};

export default Car;