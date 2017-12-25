import React from 'react';
import PropTypes from 'prop-types';
import PostCardHome from './PostCardHome';
 
export default function PostsListHome({ posts }) {
    const emptyMessage = (
        <p>No posts</p>   
    );

    const postsList = (
        <div className="ui four cards">
            {posts.map(post => <PostCardHome post={post} key={post._id}/>)}
        </div>   
    );

    return (
        <div>
            {posts.length === 0 ? emptyMessage : postsList}
        </div>
    )
}

PostsListHome.propTypes = {
    posts: PropTypes.array.isRequired
}