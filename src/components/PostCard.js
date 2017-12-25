import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FaEye from 'react-icons/lib/fa/eye';

 
export default function PostCard({ post, deletePost }) {

    return (
        <div className="ui card">
            <Link to={`/posts/post/${post._id}`} className="image">
                <img src={post.cover} alt="Post Cover" />
            </Link>
            <Link to={`/posts/post/${post._id}`} className="content">
                <div className="header">{post.title}</div>
                <div className="meta">
                    <span>{post.date}</span>
                    <span className="right floated">
                        <span><FaEye /> {post.views}</span>
                    </span>
                </div>
                <div className="description">
                    <p>{post.text.substr(0, 90)}...</p>
                </div>
            </Link>
            <div className="extra content">
                <div className="ui two buttons">
                    <Link to={`/posts/edit/${post._id}`} className="ui yellow button">Edit</Link>
                    <div className="ui red button" onClick={() => deletePost(post._id)}>Delete</div>
                </div>
            </div>
        </div>
    )
}

PostCard.propTypes = {
    post: PropTypes.object.isRequired,
    deletePost: PropTypes.func.isRequired
}