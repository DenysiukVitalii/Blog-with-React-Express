import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PostsList from '../components/PostsList';
import Filters from '../components/Filters';
import { connect } from 'react-redux';
import { fetchPosts, deletePost, setDateFilter, 
         setPopularFilter, setAlphabetFilter,
         FILTER_DATE,
         FILTER_POPULAR,
         FILTER_ALPHABET, } from '../actions'; 
 
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

const sortByDate = (a, b) => b.date - a.date;
const sortByPopular = (a, b) => b.views - a.views;
const sortByAlphabet = (a, b) => a.title.localeCompare(b.title);

const sortedPosts = (sortBy, posts) => {
  switch (sortBy) {
    case FILTER_DATE: return [...posts.sort(sortByDate)];
    case FILTER_POPULAR: return [...posts.sort(sortByPopular)];
    case FILTER_ALPHABET: return [...posts.sort(sortByAlphabet)];
    default: return posts.sort(sortByDate);
  }
};

function mapStateToProps(state) {
    return {
        posts: sortedPosts(state.filters, state.posts)
    }
}

export default connect(mapStateToProps, 
                        { fetchPosts, deletePost, setDateFilter, 
                          setPopularFilter, setAlphabetFilter })(PostsPage);