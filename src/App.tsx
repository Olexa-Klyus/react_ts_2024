import React, {FC} from 'react';
import './App.css';
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";
import {getAllCommentsOfPost} from "./services/json.api.service";

const App: FC = () => {

    const lift = (postId: number) => {
        getAllCommentsOfPost(postId).then(({data})=>{
            console.log(data)
        })
    }
    return (
        <div className={'App'}>
            <div className={'posts'}><Posts lift={lift}/></div>
            <div className={'comments'}><Comments/></div>
        </div>
    );
}

export default App;
