import React, {FC} from 'react';
import {IPaginatedPageModel} from "../models";
import {useSearchParams} from "react-router-dom";

interface IProps {
    prev: IPaginatedPageModel | null,
    next: IPaginatedPageModel | null
}

const Pagination: FC<IProps> = ({ prev, next}) => {

// для пагінації додаємо useSearchParams і перехід на 1 сторінку за дефолтом
    const [query, setQuery] = useSearchParams({page: '1'});

    const changePage = (action: string) => {
        switch (action) {
            case 'next':
                // setQuery({'page':'2'})
                // просто беремо номер наступної сторінки з обєкта який нам прийшов і сетимо
                setQuery({...next});
                break;

            case 'prev':
                // setQuery({'page':'1'})
                setQuery({...prev});
                break;
        }
    }
    return (
        <div>
            <button onClick={() => {
                changePage('prev');
            }}
                    disabled={!prev}
            >prev
            </button>

            <button onClick={() => {
                changePage('next');
            }}
                    disabled={!next}
            >next
            </button>
        </div>
    );
};

export default Pagination;