import React, {FC} from 'react';
import {CartModel} from "../../models/CartModel";

type IProps = { item: CartModel }

const Cart: FC<IProps> = ({item}) => {

    const onClickHandler=()=>{

    }
    return (
        <div>
            <h2>cart # - {item.id}.  Total - {item.total}</h2>
            <button onClick={onClickHandler}>Products</button>
        </div>
    );
};

export default Cart;