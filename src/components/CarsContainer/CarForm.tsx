import React, {useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {carActions} from "../../store";
import {ICar} from "../../interfaces";


const CarForm = () => {
    const {reset, register, handleSubmit, setValue} = useForm<ICar>();
    const {carForUpdate} = useAppSelector(state => state.cars);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (carForUpdate) {
            setValue("brand", carForUpdate.brand)
            setValue("price", carForUpdate.price)
            setValue("year", carForUpdate.year)
        }
    }, [carForUpdate]);

    const save: SubmitHandler<ICar> = (car) => {
        dispatch(carActions.create({car}))
        reset()
    }

    const update: SubmitHandler<ICar> = (car) => {
        const {id} = car
        console.log(car)
        dispatch(carActions.updateById())
        reset()
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>{carForUpdate ? 'update' : 'save'}</button>
        </form>
    );
};


// const save = async (car) => {
//     await carService.create(car)
//     dispatch(carActions.trigger())
//     reset()
// }
//
// const update=async (car)=>{
//     await carService.updateById(carForUpdate.id,car)
//     dispatch(carActions.trigger())
//     dispatch(carActions.setCarForUpdate(null))
//     reset()
// }
export default CarForm;