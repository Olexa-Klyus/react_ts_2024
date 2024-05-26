import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Car from "./Car";
import {carService} from "../../services";
import {carActions} from "../../store";

const Cars = () => {

    const {cars, trigger} = useSelector(state => state.cars);

    const dispatch = useDispatch()

    useEffect(() => {
        // тeпeр не запускаємо запит безпосередньо тут, а даємо команду на запуск в carsSlice за допомогою AsyncThunk
        // carService.getAll().then(({data}) => dispatch(carActions.setAllCars(data)))
        dispatch(carActions.getAll())
    }, [trigger, dispatch])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;