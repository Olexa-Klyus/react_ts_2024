import React, {useEffect, useState} from 'react';
import {carService} from "../services";
import {ICarPaginatedModel} from "../models";
import Cars from "../components/Cars";
import Pagination from "../components/Pagination";
import {useSearchParams} from "react-router-dom";


const CarsPage = () => {
    const [carsPaginatedObject, setCarsPaginatedObject] = useState<ICarPaginatedModel>({
        items: [],
        next: null,
        prev: null,
        total_pages: 0,
        total_items: 0
    })

// тут тільки зчитуємо значення сторінки, яке впроваджується в компоненті Pagination
    const [query, setQuery] = useSearchParams();
    // console.log('page = ', query.get('page'))

    useEffect(() => {
        carService.getCars(query.get('page') || '1').then((data) => {
            if (data) {
                setCarsPaginatedObject(data);
            }
        })
    }, [query]);

   return (
        <div>
            <Cars cars={carsPaginatedObject?.items}/>
            <Pagination prev={carsPaginatedObject.prev} next={carsPaginatedObject.next}/>
        </div>
    );
};

export default CarsPage;