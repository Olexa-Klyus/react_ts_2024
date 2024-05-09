import React, {FC} from 'react';

interface IProductProps {
    "id": number,
    "title": string,
    "description": string,
    "price": number,
    "discountPercentage": number,
    "rating": number,
    "stock": number,
    "brand": string,
    "category": string,
    "thumbnail": string,
    "images": string[]
}

const Product: FC<IProductProps> = () => {
    return (
        <div>
            <h2>{}</h2>
        </div>
    );
};

export default Product;