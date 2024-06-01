import React, {useEffect, useState} from 'react';
import {carService} from "../services";
import Cars from "../components/Cars";

const CarsPage = () => {
    const [cars, setCars] = useState()
    useEffect(() => {
        carService.getCars().then(value => setCars(value));
    }, []);

    return (
        <div>
            <Cars cars={cars}/>
        </div>
    );
};

export default CarsPage;