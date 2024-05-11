import React, {FC} from 'react';
import {ICommentModel} from "../../models/ICommentModel";

interface ICommentProps {
    comment: ICommentModel;
}
const Comment : FC<ICommentProps> = ({comment}) => {
    return (
        <div>
            (<li>{comment.id} {comment.body}</li>))
        </div>
    );
};

export default Comment;