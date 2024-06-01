import React, {useEffect} from 'react';
import {carService} from "../services";

const CarsPage = () => {

    useEffect(() => {
        carService.getCars()
    }, []);

    return (
        <div>
            dtuhjrtu
        </div>
    );
};

export default CarsPage;