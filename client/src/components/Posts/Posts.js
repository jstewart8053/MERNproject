import React from 'react';
import Post from './Post/Post'
import useStyles from './styles'

function Posts() {
    const classes = useStyles()
    return (
        <div>

            <h1> Posts </h1>
            <Post />
            <Post />
        </div>
    )
}

export default Posts;
