import React from 'react';
import './App.css';
import Users from "./components/users/Users";

// запуск хрому з параметрами щоб не било помилку CORS error
// chrome.exe --user-data-dir="C://chrome-dev-disabled-security" --disable-web-security --disable-site-isolation-trials

const App = () => {
    return (
        <div>
            <Users/>
        </div>
    );
}

export default App;
