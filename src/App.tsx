import React, {useState} from 'react';
import './App.css';


interface IState {
    value: number;
}

const App = () => {

    const [counter, setCounter] = useState<IState>({value: 0});

    const increment = () => {
        // для того щоб відпрацював setCounter потрібно йому дати інше (нове) посилання на новий обєкт
        // counter.value +=1;
        // setCounter(counter);// так працювати не буде
        // setCounter({...counter}); //потрібно спреднути

        // або записати як передавання нового обєкта
        // setCounter({value:counter.value+1})

        // або через колбек функцію, так ураще працює з асинхронними функціями
        setCounter(prevState => ({value: prevState.value + 1}));
    };

    const decrement = () => {
        setCounter(prevState => ({value: prevState.value - 1}));
    };

    const reset = () => {
        setCounter({value: 0});
    };

    return (
        <div>
            <h2>{counter.value}</h2>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    );
}

export default App;
