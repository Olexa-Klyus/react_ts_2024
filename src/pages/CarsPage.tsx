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

// для пагінації додаємо useSearchParams і перехід на 1 сторінку за дефолтом
    const [query, setQuery] = useSearchParams({page: '1'});
    // console.log('page = ', query.get('page'))

    useEffect(() => {
        carService.getCars(query.get('page') || '1').then((data) => {
            if (data) {
                setCarsPaginatedObject(data);
            }
        })
    }, [query]);

    const changePage = (action: string) => {
        switch (action) {
            case 'next':
                // setQuery({'page':'2'})
                // просто беремо номер наступної сторінки з обєкта який нам прийшов і сетимо
                setQuery({...carsPaginatedObject.next});
                break;

            case 'prev':
                // setQuery({'page':'1'})
                setQuery({...carsPaginatedObject.prev});
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