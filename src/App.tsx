import React from 'react';
import './App.css';
import MyComponent from "./components/MyComponent";


const App = () => {
    return (
        <div>
            <MyComponent>
                <h3> Hello from children</h3>
            </MyComponent>
        </div>
    );
}

export default App;
