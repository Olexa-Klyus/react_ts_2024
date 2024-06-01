import React, {FC} from 'react';
import {ICarWithAuthModel} from "../models";
import Car from "./Car";

interface IProps {
    cars: ICarWithAuthModel[]
}

const Cars: FC<IProps> = ({cars}) => {

    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car}/> )}
        </div>
    );
};


export default Cars;