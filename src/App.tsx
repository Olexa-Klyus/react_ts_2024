import React, {FC, memo, useCallback, useMemo, useState} from 'react';
import './App.css';

// мемомізує обєкти
// якщо функція багато разів рендериться без змін , то доцільно її замемити


const A: FC<any> = memo(({foobar}) => {
    console.log('A render');
    foobar();
    return <div>hello</div>
})

const App = () => {
    console.log('App render');

    const [counter, setCounter] = useState(0)


    const foobar = useCallback(() => {
        //.... складна логіка
    }, []);

    const arr = useMemo(() => {
        return [];
    }, []);

    return (
        <div>
            <A foobar={foobar} arr={arr}/>
            <button onClick={() => {
                setCounter(counter + 1);
            }}>click
            </button>
        </div>
    );
}

export default App;
