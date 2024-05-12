import React, {FC} from 'react';
import {CartModel} from "../../models/CartModel";
import {ProductModel} from "../../models/ProductModel";
import products from "../Products/Products";

type IProps = { item: CartModel, getProductsFromCart: (products:ProductModel[]) => void }

const Cart: FC<IProps> = ({item, getProductsFromCart}) => {

    const onClickHandler = () => {
        getProductsFromCart(item.products);
    };

    return (
        <div>
            <h2>cart # - {item.id}. Total - {item.total}</h2>
            <button onClick={onClickHandler}>Products</button>
        </div>
    );
};

export default Cart;