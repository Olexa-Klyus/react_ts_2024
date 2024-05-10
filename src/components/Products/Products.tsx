import React, {useEffect, useState} from 'react';
import {IProductProps} from "../../types";
import {Product} from "../Product/Product";

const Products = () => {


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

            {products.map((value: IProductProps) =>
                <Product key={value.id}
                         id={value.id}
                         title={value.title}
                         description={value.description}
                         price={value.price}
                         discountPercentage={value.discountPercentage}
                         rating={value.rating}
                         stock={value.stock}
                         brand={value.brand}
                         category={value.category}
                         thumbnail={value.thumbnail}
                         images={value.images}/>)
            }
        </div>
    );
};

export default Products;