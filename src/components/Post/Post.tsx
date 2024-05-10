import React, {FC} from 'react';
import {ITypePostProps} from "../../types";

import classes from "./Post.module.css";

export const Post: FC<ITypePostProps> = ({id, title, body}) => {
    return (
        <div className={classes.PostWrapper}>

            <h3>{id} ) {title}</h3>
            <p>{body}</p>
        </div>
    );
};
