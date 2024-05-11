import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";

interface IPostProps {
    post: IPostModel;
}

type IPostPropsType = IPostProps & { children?: React.ReactNode } & { lift?: (postId: number) => void };


const Post: FC<IPostPropsType> = ({post, lift}) => {
    const onClickHandler = () => {
        if (lift) {
            lift(post.id);
        }
    };
    return (
        <div>
            {post.id} {post.title}
            {/*<p>{post.body}</p>*/}
            <div>
                <button onClick={onClickHandler}>show comments to post</button>
            </div>

            <hr/>
        </div>
    );
};

export default Post;