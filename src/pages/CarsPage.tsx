import React, {useEffect, useState} from 'react';
import {carService} from "../services";
import {ICarPaginatedModel} from "../models";

const CarsPage = () => {
    const [carsPage, setCarsPage] = useState<ICarPaginatedModel>()
    useEffect(() => {
        carService.getCars().then((data) => {
            console.log(data);
            if (data) setCarsPage(data)
        })
    }, []);
    return (
        <div>
            {/*items && <Cars items={carsPage?.items}/>*/}
        </div>
    );
};

export default CarsPage;