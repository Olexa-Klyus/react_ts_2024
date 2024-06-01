import React, {FC, useEffect, useState} from 'react';
import {carService} from "../services";
import {ICarWithAuthModel} from "../models";
import Car from "./Car";

const Cars = () => {
    const [cars, setCars] = useState<ICarWithAuthModel[]>([])
    useEffect(() => {
        carService.getCars().then(({value}) => {
            console.log(value);
            if (value) setCars(value)
        })
    }, []);
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};


export default Cars;