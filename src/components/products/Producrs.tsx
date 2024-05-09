import React, {useEffect, useState} from 'react';

const Producrs = () => {


    const [products, setProducts] = useState([])
    //https://dummyjson.com/products

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(value => value.json())
            .then(value => {
                setProducts(value)
            })
    }, []);
    return (
        <div>

        </div>
    );
};

export default Producrs;