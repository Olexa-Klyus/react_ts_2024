import React, {FC, memo, useCallback, useState} from 'react';
import './App.css';

// щоб не перерендерювати постійно статичний компонент, потрібно його тіло огорнути в хук memo
// він перевіряє, якщо всередині memo змін нема, то перерендеру не буде
// але якщо туди заходить аргументом посилання на функцію, це розцінюється як щось нове
// і буде рендер. Якщо є складна логіка, яка довго виконується, її треба огорнути
// в useCallback(), щоб уникнути постійного виконання при рендері
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
    }, [counter]);

    return (
        <div>
            <A foobar={foobar}/>
            <button onClick={() => {
                setCounter(counter + 1);
            }}>click
            </button>
        </div>
    );
}

export default App;
