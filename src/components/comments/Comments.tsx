import React, {FC} from 'react';
import {ICommentModel} from "../../models/ICommentModel";

interface ICommentsProps {
    comments: ICommentModel[]
}

const Comments: FC<ICommentsProps> = ({comments}) => {
    return (
        <div>
            {
                comments.map((comment: ICommentModel) => (<li>{comment.body}</li>))
            }
        </div>
    );
};

export default Comments;