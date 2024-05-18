import React, {FC} from 'react';
import {IPostModel} from "../models/IPostModel";

interface Irops {
    post: IPostModel
}

const PostComponent: FC<Irops> = ({post}) => {
    return (
        <div>
            {post.title}
        </div>
    );
};

export default PostComponent;