import React, {FC} from 'react';

export interface IProductProps {
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

export type ITypeProductProps = IProductProps & { children?: React.ReactNode }
const Product: FC<ITypeProductProps> = ({
                                            id,
                                            title,
                                            description,
                                            price,
                                            discountPercentage,
                                            rating,
                                            stock,
                                            brand,
                                            category,
                                            thumbnail,
                                            images
                                        }) => {
    return (
        <div>
            <h2>{id} {title}</h2>
            <p>{description}</p>
            <h3>ціна - {price} грн.</h3>
        </div>
    );
};

export default Product;