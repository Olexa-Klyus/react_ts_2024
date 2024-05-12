import React, {FC, useEffect, useState} from 'react';
import {CartModel} from "../../models/CartModel";
import {getAllCarts} from "../../services/dummy.api.service";
import Cart from '../Cart/Cart';


const Carts :FC = () => {
    const [carts, setCarts] = useState<CartModel[]>([]);

    useEffect(() => {
        getAllCarts().then(({data:{carts}}) => setCarts(carts))
    }, []);

    return (
        <div>
            {
                carts.map(value => (
                    <Cart
                    key={value.id}
                    item={value}/>)
                )
            }
        </div>
    );
};

export default Carts;