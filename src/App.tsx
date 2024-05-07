import React from 'react';
import './App.css';
import Caracter from "./components/character/Character"

const App = () => {
    return (
        <div>
            <Caracter
                name={'bart'}
                img={'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, illo?

                </Caracter>
            <Caracter
                name={'homer'} img={'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}/>
        </div>
    );
}

export default App;
