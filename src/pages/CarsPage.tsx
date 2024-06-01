import React, {useEffect, useState} from 'react';
import {carService} from "../services";
import Cars from "../components/Cars";

const CarsPage = () => {

    return (
        <div>
            <Cars/>
        </div>
    );
};

export default CarsPage;