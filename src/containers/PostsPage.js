import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PostsList from '../components/PostsList';
import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../actions'; 
 
class PostsPage extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>   
                <div className="ui secondary  menu">
                    <h1 className="item">
                        Posts List
                    </h1>
                    <div className="right menu">
                        <div className="ui item">
                            <Link className="ui button" to="/posts/new">
                                Create post
                            </Link>
                        </div>
                    </div>
                </div>
                <PostsList posts={this.props.posts} deletePost={this.props.deletePost} />
            </div>
        )
    }
}

PostsPage.propTypes = {
    posts: PropTypes.array.isRequired,
    fetchPosts: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, { fetchPosts, deletePost })(PostsPage);