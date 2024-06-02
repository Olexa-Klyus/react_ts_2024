import React, {createContext} from 'react';
import './App.css';
import A from "./components/A";

const Context = createContext('');

// Context - це віртуальна компонента, якою ми огортаємо найголовнішу компоненту (в нашому випадку <A/>)
// у value можна передати обєкт з будь якою кількістю значень
// контекстів може бути багато, можна використовувати будь яку кількість з різними назвами

const App = () => {

    return (
        <div>
            <Context.Provider value={'Hello from Context'}>
                <A/>
            </Context.Provider>
        </div>
    );
}
export {Context};
export default App;
