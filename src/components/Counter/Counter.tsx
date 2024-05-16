import React, {useEffect, useState} from "react";


import classes from "./Counter.module.css";

export const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('count has been changed')
    }, [count]);
    const handleInc = () => setCount(count + 1)
    const handleDec = () => setCount(count - 1)

    return (
        <div>
            <div className={classes.wrapper}>
                Counter - {count ? count : 'no count'}
                <button className={classes.button} onClick={handleInc}>Increment</button>
                <button className={classes.button} onClick={handleDec}>Decrement</button>

            </div>
        </div>
    )
}