import React from 'react';
import useStyles from './styles'
import { useDispatch } from 'react-redux';

function Post() {
    const dispatch = useDispatch();
    const classes = useStyles()
    return (
        <div>
            <h1 className={classes}>
                Post</h1>
        </div>
    )
}

export default Post;
