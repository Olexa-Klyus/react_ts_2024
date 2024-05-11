import React, {FC, useState} from 'react';
import './App.css';
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";
import {getAllCommentsOfPost} from "./services/json.api.service";
import {ICommentModel} from "./models/ICommentModel";

const App: FC = () => {

    const [comments, setComments] = useState<ICommentModel[]>([]);

    const lift = (postId: number) => {
        getAllCommentsOfPost(postId).then(({data}) => {
            setComments(data)
            console.log(data)
        })
    }
    return (
        <div className={'App'}>
            <div className={'posts'}><Posts lift={lift}/></div>
            <div className={'comments'}><Comments comments={comments}/></div>
        </div>
    );
}

export default App;
