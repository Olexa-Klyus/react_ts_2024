import React, {useEffect, useState} from 'react';
import {authService, carService} from "../services";
import {ICarPaginatedModel} from "../models";
import Cars from "../components/Cars";
import Pagination from "../components/Pagination";
import {useNavigate, useSearchParams} from "react-router-dom";
import {AxiosError} from "axios";


const CarsPage = () => {
    const [carsPaginatedObject, setCarsPaginatedObject] = useState<ICarPaginatedModel>({
        items: [],
        next: null,
        prev: null,
        total_pages: 0,
        total_items: 0
    })

    const navigate = useNavigate();

// тут тільки зчитуємо значення сторінки, яке впроваджується в компоненті Pagination
    const [query, setQuery] = useSearchParams();
    // console.log('page = ', query.get('page'))

    // виносимо обробку помилок сюди з сервісів, щоб мати можливість робити редіректи, авторефреші і т.д.
    // для цього потрібно  зробити ще одину локальну async функцію всередині useEffect
    // в якій викликаємо наші сервіс функції, і вже тут відловлюємо помилки
    useEffect(() => {
        const getCarsDAta = async () => {
            try {
                const response = await carService.getCars(query.get('page') || '1');
                if (response) {
                    setCarsPaginatedObject(response);
                }
            } catch (e) {
                const err = e as AxiosError;
                if (err && err?.response?.status === 401) {
                    try {
                        await authService.refresh();
                    } catch (e) {
                        return navigate('/');
                    }
                    const response = await carService.getCars(query.get('page') || '1');
                    if (response) {
                        setCarsPaginatedObject(response);
                    }
                }
            }
        }
        getCarsDAta();
    }, [query]);

    return (
        <div>
            <Cars cars={carsPaginatedObject?.items}/>
            <Pagination prev={carsPaginatedObject.prev} next={carsPaginatedObject.next}/>
        </div>
    );
};

export default CarsPage;