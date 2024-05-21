import React, {useEffect, useRef, useState} from 'react';
import './App.css';

// якщо useState фіксує стан і рендерить, то useRef фіксує стан без рендеру
// тримає посилання на обєкт в памяті і не втрачається при оновленні сторінки
const App = () => {

    const [x, setX] = useState<number>(0);
    const y=useRef(0);

    console.log('work')

    return (
        <div>
            <button onClick={() => {
                setX((x) => x + 1);
                console.log(x);
            }}>change X - {x}
            </button>

            <button onClick={() => {
                y.current++;
                console.log(y);
            }}>change Y - {y.current}
            </button>

        </div>
    );
}

export default App;
