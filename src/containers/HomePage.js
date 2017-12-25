import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostsListHome from '../components/PostsListHome';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions'; 
 
class HomePage extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>   
                <PostsListHome posts={this.props.posts} deletePost={this.props.deletePost} />
            </div>
        )
    }
}

HomePage.propTypes = {
    posts: PropTypes.array.isRequired,
    fetchPosts: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, { fetchPosts })(HomePage);