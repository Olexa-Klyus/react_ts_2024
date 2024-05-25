import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Car from "./Car";
import {carService} from "../../services";
import {carActions} from "../../store";

const Cars = () => {

    const {cars} = useSelector(state => state.cars);

    const dispatch = useDispatch()

    useEffect(() => {
        carService.getAll().then(({data}) => dispatch(carActions.setAllCars(data)))
    }, [])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;