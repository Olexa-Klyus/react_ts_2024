import React, {memo, useState} from 'react';
import './App.css';

// мемомізує компоненти
// щоб не перерендерювати постійно статичний компонент, потрібно його тіло огорнути в хук memo
// він перевіряє, якщо всередині memo змін нема, то перерендеру не буде

const A = memo(() => {
    console.log('A render');
    return <div>hello</div>
})

const App = () => {
    console.log('App render');

    const [counter, setCounter] = useState(0)

    return (
        <div>
            <A/>
            <button onClick={() => {
                setCounter(counter + 1);
            }}>click
            </button>
        </div>
    );
}

export default App;
