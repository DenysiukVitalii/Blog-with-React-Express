import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { savePostRequest, fetchPost, updatePost } from '../actions/posts';
import PostForm from '../components/PostForm';

class PostFormPage extends Component {
    state = {
        redirect: false,
        errors: {}
    }
    
    componentDidMount = () => {
        const { match } = this.props;
        if (match.params._id) {
            this.props.fetchPost(match.params._id);
        }
    }
    
    savePost = ({_id, title, cover, text, date, views}) => {
        if (_id) {
            this.setState({ redirect: true })
            return this.props.updatePost({ _id, title, cover, text, date, views });
        } else {
            this.setState({ redirect: true })
            console.log(this.props.serverErrors);
            return this.props.savePost({title, cover, text, date, views: 0});
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
                        errors={this.state.errors}
                        savePost={this.savePost}
                    />
                }
            </div>
        )
    }
}
function mapStateToProps(state, props) {
    const { match } = props;
    console.log(state.get('formErrors').errors);
    if (match.params._id) {
        return {
            post: state.get('posts').find(item => item._id === match.params._id),
            serverErrors: state.get('formErrors').errors
        }
    }
    return { post: null };
}

export default connect(mapStateToProps, { savePost: savePostRequest, 
                                          fetchPost, updatePost })(PostFormPage);