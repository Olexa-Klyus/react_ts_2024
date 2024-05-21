import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {

    const [counter, setCounter] = useState<number>(0)
    const [x, setX] = useState<number>(0)

    useEffect(() => {
        let id = setInterval(() => {
            setCounter(counter + 1);
        }, 2000);

        // в useEffect може бути return. в ньому виконується дія після того як як useEffect відпрацьовує
        // використати можна для створення власної процедури відписки від постійних повідомлень, які шлють сокети
        return () => {
            console.log('useEffect return');
            clearInterval(id)
        }
    }, [x]);

    console.log('..')
    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={() => {
                setX((x) => x + 1);
            }}>reset
            </button>
        </div>
    );
}

export default App;
