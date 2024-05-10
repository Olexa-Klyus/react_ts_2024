import React, {useEffect, useState} from "react";

export const Counter = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('count has been changed')
    }, [count]);

    const handleInc = () => setCount(count + 1)
    const handleDec = () => setCount(count - 1)

    return (
        <div>
            <div>Counter - {count ? count : 'no counter'}</div>
            <button onClick={handleInc}>Increment</button>
            <button onClick={handleDec}>Increment</button>
        </div>
    )
}