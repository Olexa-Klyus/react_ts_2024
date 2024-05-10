import React, {FC} from 'react';
import classes from './Product.module.css'
import {ITypeProductProps} from "../../types";


export const Product: FC<ITypeProductProps> = ({
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
            <h4>Розмір знижки - {discountPercentage}</h4>
            <h4>Рейтинг - {rating}</h4>
            <h4>Кількість - {stock}</h4>
            <h4>Бренд - {brand}</h4>
            <h4>Категорія - {category}</h4>

            <img src={thumbnail} alt={title}/>

            <div className={classes.ProductImageWrap}>
                {
                    images?.map(image =>
                        <div className={classes.ProductImageDiv}>
                            <img className={classes.ProductImg} src={image} alt={title}/>
                        </div>
                    )}
            </div>
        </div>
    );
};

