import React, {useEffect, useState} from "react";



import classes from "./Counter.module.css";

export const Counter = () => {

    const [count, setCount] = useState(0);
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((value) => value.json())
            .then((value) => console.log(value));
    }, []);

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

                {posts.map((post:any) => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}