import React, {FC} from 'react';
import './App.css';
import Carts from "./components/Carts/Carts";
import {ProductModel} from "./models/ProductModel";

const App: FC = () => {

    const getProductsFromCart = (products: ProductModel[]) => {
        console.log(products);
    }

    return (
        <div>
            <Carts getProductsFromCart={getProductsFromCart}/>
        </div>
    );
}

export default App;
