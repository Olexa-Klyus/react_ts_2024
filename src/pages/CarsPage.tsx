import React from 'react';
import CarForm from "../components/CarsContainer/CarForm";
import Cars from "../components/CarsContainer/Cars";

const CarsPage = () => {
    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export default CarsPage;