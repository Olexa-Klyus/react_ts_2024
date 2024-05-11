import React, {FC} from 'react';
import {ICommentModel} from "../../models/ICommentModel";
import Comment from "../comment/Comment";

interface ICommentsProps {
    comments: ICommentModel[]
}

const Comments: FC<ICommentsProps> = ({comments}) => {
    return (
        <div>
            {
                comments.map((comment: ICommentModel) => (<Comment key={comment.id} comment={comment}/>))
            }
        </div>
    );
};

export default Comments;