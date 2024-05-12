import React, {FC} from 'react';
import {CartModel} from "../../models/CartModel";

type IProps = { item: CartModel }

const Cart: FC<IProps> = ({item}) => {
    return (
        <div>
            <h2>cart # - {item.id}.  Total - {item.total}</h2>
        </div>
    );
};

export default Cart;