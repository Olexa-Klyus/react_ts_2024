import React, {FC} from 'react';

interface IProductProps = {
    "id": ,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    "images": [
}
const Product:FC<IProductProps> = () => {
    return (
        <div>
            
        </div>
    );
};

export default Product;