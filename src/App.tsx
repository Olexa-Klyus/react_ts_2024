import React, {FC, memo, useCallback, useMemo, useState} from 'react';
import './App.css';

// мемомізує обєкти
// і в deps вказати тригер, наприклад counter

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
