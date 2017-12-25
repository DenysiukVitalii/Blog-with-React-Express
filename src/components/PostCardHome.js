import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FaEye from 'react-icons/lib/fa/eye';

 
export default function PostCardHome({ post }) {

    return (
         <Link to={`/post/${post._id}`} className="ui card">
            <div className="image">
                <img src={post.cover} alt="Post Cover" />
            </div>
            <div className="content">
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
            </div>
        </Link>
    )
}

PostCardHome.propTypes = {
    post: PropTypes.object.isRequired
}