import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { savePost, fetchPost, updatePost } from '../actions';
import PostForm from '../components/PostForm';

class PostFormPage extends Component {
    state = {
        redirect: false
    }
    
    componentDidMount = () => {
        const { match } = this.props;
        if (match.params._id) {
            this.props.fetchPost(match.params._id);
        }
    }
    
    savePost = ({_id, title, cover, text, date, views}) => {
        if (_id) {
            return this.props.updatePost({ _id, title, cover, text, date, views }).then(
                () => { this.setState({ redirect: true }) }
            );
        } else {
            return this.props.savePost({title, cover, text, date, views: 0}).then(
                () => { this.setState({ redirect: true }) }
            );
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.redirect ? 
                    <Redirect to="/posts" /> :
                    <PostForm 
                        post={this.props.post}
                        savePost={this.savePost}
                    />
                }
            </div>
        )
    }
}
function mapStateToProps(state, props) {
    const { match } = props;
    if (match.params._id) {
        return {
            post: state.posts.find(item => item._id === match.params._id)
        }
    }
    return { post: null };
}

export default connect(mapStateToProps, { savePost, fetchPost, updatePost })(PostFormPage);