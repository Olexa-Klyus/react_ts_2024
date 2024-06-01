import React, {useEffect, useState} from 'react';
import {carService} from "../services";
import {ICarPaginatedModel} from "../models";
import Cars from "../components/Cars";

const CarsPage = () => {
    const [carsPaginatedObject, setCarsPaginatedObject] = useState<ICarPaginatedModel>({
        items: [],
        next: null,
        prev: null,
        total_pages: 0,
        total_items: 0
    })
    useEffect(() => {
        carService.getCars().then((data) => {
            console.log(data);
            if (data) {
                setCarsPaginatedObject(data);
            }
        })
    }, []);
    return (
        <div>
            <Cars cars={carsPaginatedObject?.items}/>
        </div>
    );
};

export default CarsPage;