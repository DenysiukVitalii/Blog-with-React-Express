import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, updatePost } from '../actions'; 
import FaEye from 'react-icons/lib/fa/eye';
 
class PostPage extends Component {
    state = {
        _id: this.props.post ? this.props.post._id : null,
        title: this.props.post ? this.props.post.title : '',
        cover: this.props.post ? this.props.post.cover : '',
        text: this.props.post ? this.props.post.text : '',
        date: this.props.post ? this.props.post.date : '',
        views: this.props.post ? this.props.post.views : 0
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            _id: nextProps.post._id,
            title: nextProps.post.title,
            cover: nextProps.post.cover,
            text: nextProps.post.text,
            date: nextProps.post.date,
            views: nextProps.post.views
        })
    }

    componentDidMount() {
        const { match } = this.props;
        if (match.params._id) {
            this.props.fetchPost(match.params._id);
        }
    }

    componentWillUnmount() {
        let { views } = this.state;
        ++views;
        this.props.updatePost({...this.state, views}).then(
            () => { this.setState({ redirect: true }) }
        );
    }

    render() {
        const {title, date, cover, views, text} = this.state;
        return (
            <div>   
                <div className="ui secondary menu">
                    <div>
                        <h1>
                            {title}
                        </h1>
                        <div className="extra-info">
                            <span className="date">{(new Date(date)).toLocaleDateString()}</span>
                            <span><FaEye /> {views}</span>
                        </div>
                    </div>
                </div>
                <div className="post">
                    <img src={cover} alt="post cover"/>
                    <p>{text}</p>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    const { match } = props;
    if (match.params._id) {
        return {
            post: state.get('posts').find(item => item._id === match.params._id)
        }
    }
    return { post: null };
}

export default connect(mapStateToProps, { fetchPost, updatePost })(PostPage);