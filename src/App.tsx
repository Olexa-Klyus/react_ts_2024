import React from 'react';
import './App.css';
import {useFetch} from "./useFetch";


// хук це функція, імя якої починається на use

// оскільки тип нашого кастомного хука дженерік, то на етапі виклику ми повинні вказати яким він буде
// передати або модель інтерфейс, або описати що це масив таких то обєктів

const App = () => {
    const data = useFetch<{ id: number, username: string }[]>('/users', []);

    return (
        <div>
            {data.map((item,) => (<div> {item.id} {item.username} </div>))}
        </div>
    );
}

export default App;
