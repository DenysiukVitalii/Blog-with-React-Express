import React from 'react';
import PropTypes from 'prop-types';
import PostCard from './PostCard';
 
export default function PostsList({ posts, deletePost, url }) {
    const emptyMessage = (
        <p>No posts</p>   
    );

    const postsList = (
        <div className="ui stackable four column grid">
            {posts.map(post => <PostCard post={post} key={post._id} 
                                         deletePost={deletePost} url={url}/>)}
        </div>   
    );

    return (
        <div>
            {posts.length === 0 ? emptyMessage : postsList}
        </div>
    )
}

PostsList.propTypes = {
    posts: PropTypes.array.isRequired,
    deletePost: PropTypes.func.isRequired
}