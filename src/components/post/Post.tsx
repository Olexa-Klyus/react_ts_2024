import React, {FC} from 'react';
import {PostModel} from "../../models/PostModel";

interface IPostProps {
    post: PostModel;
}

type IPostPropsType = IPostProps & { children?: React.ReactNode }


const Post: FC<IPostPropsType> = ({post}) => {
    return (
        <div>
            {post.id}  {post.title}
            <p>{post.body}</p>
        </div>
    );
};

export default Post;