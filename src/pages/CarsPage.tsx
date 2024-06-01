import React, {useEffect, useState} from 'react';
import {carService} from "../services";
import {ICarPaginatedModel} from "../models";
import Cars from "../components/Cars";
import Pagination from "../components/Pagination";

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

    const changePage = (action: string) => {
        switch (action) {
            case 'prev':
                //todo set param
                break;
            case 'next':
                //todo set param
                break;
        }
    }

    return (
        <div>
            <Cars cars={carsPaginatedObject?.items}/>
            <Pagination changePage={changePage} prev={carsPaginatedObject.prev} next={carsPaginatedObject.next}/>
        </div>
    );
};

export default CarsPage;