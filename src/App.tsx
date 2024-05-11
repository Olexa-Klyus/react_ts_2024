import React, {FC} from 'react';
import './App.css';
import UsersComponent from "./components/UsersComponent";

const App: FC = () => {

    const lift=(user:any)=>{
        console.log(user);
    }
    return (
        <div>
            <UsersComponent lift={lift}/>
            <hr/>



            <hr/>
        </div>
    );
}

export default App;
