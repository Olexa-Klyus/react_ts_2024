import React, {FC} from 'react';
import './App.css';
import Products from "./components/Products/Products";
import {Posts} from "./components/Posts/Posts";


const App: FC = () => {
    return (
        <div>
            {/*<Products/>*/}
            {/*{<Counter/>}*/}
            <Posts/>

        </div>
    );
}

export default App;
