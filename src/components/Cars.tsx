import React from 'react';
import {ICarWithAuthModel} from "../models";
import Car from "./Car";

const Cars = (items: ICarWithAuthModel[]) => {

    return (
        <div>
            {/*{items.map(car => <Car key={car.id} car={car}/>)}*/}
        </div>
    );
};


export default Cars;