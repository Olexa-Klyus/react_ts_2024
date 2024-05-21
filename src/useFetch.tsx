import {useEffect, useState} from "react";

// можна зробити динамічну типізацію через дженерік (Т) і на етапі виклику передавати їй типізацію
export const useFetch = <T, >(endpoint: string,initValue: T ) => {
    const [array, setArray] = useState<T>(initValue);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com' + endpoint)
            .then(value => value.json())
            .then(value => {
                setArray(value);
            });
    }, []);
    return array;
};