import React, {useEffect, useState} from 'react';
import Product from "../product/Product";
import product from "../product/Product";

const Producrs = () => {


    const [products, setProducts] = useState([])
    //https://dummyjson.com/products

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(value => value.json())
            .then(({products}) => {
                setProducts(products)
            })
    }, []);
    return (
        <div>
            <Product key={products.id}
                     id={} title={} description={} price={} discountPercentage={} rating={} stock={} brand={}
                     category={} thumbnail={} images={}/>
        </div>
    );
};

export default Producrs;