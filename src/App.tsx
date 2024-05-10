import React, {FC} from 'react';
import './App.css';
import Producrs from "./components/products/Producrs";
import {Counter} from "./components/counter/Counter";

const App: FC = () => {
    return (
        <div>
            {/*<Producrs/>*/}
            {<Counter/>}
        </div>
    );
}

export default App;
