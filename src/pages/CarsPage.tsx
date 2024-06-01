import React, {useEffect} from 'react';
import {carService} from "../services";
import Cars from "../components/Cars";

const CarsPage = () => {

    useEffect(() => {
        carService.getCars().then(value => console.log(value));
    }, []);

    return (
        <div>
            <Cars/>
        </div>
    );
};

export default CarsPage;