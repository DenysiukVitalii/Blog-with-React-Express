import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PostsList from '../components/PostsList';
import Filters from '../components/Filters';

class PostsPage extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const { match, setDateFilter, setPopularFilter, setAlphabetFilter } = this.props;
        return (
            <div>
                {
                    match.url.includes('posts') ? 
                    <div className="ui secondary menu">
                        <h1 className="item">
                            Posts List
                        </h1>
                        <div className="right menu">
                            <div className="ui item">
                                <Filters setDate={setDateFilter} 
                                    setPopular={setPopularFilter} 
                                    setAlphabet={setAlphabetFilter}/>
                            </div>
                            <div className="ui item">
                                <Link className="ui button" to="/posts/new">
                                    Create post
                                </Link>
                            </div>
                        </div>
                    </div> : 
                    <div>
                        <Filters setDate={setDateFilter} 
                                 setPopular={setPopularFilter} 
                                 setAlphabet={setAlphabetFilter}/>
                    </div>
                }  
                <PostsList posts={this.props.posts} deletePost={this.props.deletePost} url={match} />
            </div>
        )
    }
}

PostsPage.propTypes = {
    posts: PropTypes.array.isRequired,
    fetchPosts: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
    setDateFilter: PropTypes.func.isRequired,
    setPopularFilter: PropTypes.func.isRequired,
    setAlphabetFilter: PropTypes.func.isRequired,
}

export default PostsPage;