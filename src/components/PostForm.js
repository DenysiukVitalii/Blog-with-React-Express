import React, { Component } from 'react';
import classnames from 'classnames';

class PostForm extends Component {
    state = {
        _id: this.props.post ? this.props.post._id : null,
        title: this.props.post ? this.props.post.title : '',
        cover: this.props.post ? this.props.post.cover : '',
        text: this.props.post ? this.props.post.text : '',
        date: this.props.post ? this.props.post.date : '',
        views: this.props.post ? this.props.post.views : 0,
        errors: {},
        loading: false
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            _id: nextProps.post._id,
            title: nextProps.post.title,
            cover: nextProps.post.cover,
            text: nextProps.post.text,
            date: nextProps.post.date,
            views: nextProps.post.views,
            errors: nextProps.errors
        })
    }

    handleChange = (e) => {
        if (!!this.state.errors[e.target.name]) {
            let errors = Object.assign({}, this.state.errors);
            delete errors[e.target.name];
            this.setState({
                [e.target.name]: e.target.value,
                errors
            });
        } else {
            this.setState({[e.target.name]: e.target.value});
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        // validation
        let errors = {};
        if (this.state.title === '') errors.title = "Can't be empty";
        if (this.state.cover === '') errors.cover = "Can't be empty";
        if (this.state.text === '') errors.title = "Can't be empty";
        this.setState({ errors });
        const isValid = Object.keys(errors).length === 0;

        if (isValid) {
            const { _id, title, cover, text, views } = this.state;
            const date = new Date();
            this.setState({ loading: true });
            console.log(this.props.errors)
            this.props.savePost({_id, title, cover, text, date, views})
            //.catch((err) => err.response.json().then(({errors}) => this.setState({ errors, loading: false})));
        }

    }

    render() {
        const form = (
            <form className={classnames('ui', 'form', {loading: this.state.loading})} onSubmit={this.handleSubmit}>
                <h1>Add new post</h1>

                {!!this.state.errors.global && <div className="ui negative message">
                                                <p>{this.state.errors.global}</p>
                                               </div>}
                
                <div className={classnames('field', {error: !!this.state.errors.title})}>
                    <label htmlFor="title">Title</label>
                    <input type="text" 
                           name="title" 
                           id="title" 
                           value={this.state.title}
                           onChange={this.handleChange}
                           placeholder="Title"/>
                    <span>{this.state.errors.title}</span>
                </div>
                <div className={classnames('field', {error: !!this.state.errors.cover})}>
                    <label htmlFor="cover">Cover</label>
                    <input type="text" 
                           name="cover" 
                           id="cover" 
                           value={this.state.cover}
                           onChange={this.handleChange}
                           placeholder="url of image"/>
                    <span>{this.state.errors.cover}</span>
                </div>
                <div className="field">
                    {this.state.cover !== '' && <img src={this.state.cover} 
                                                     alt="cover" 
                                                     className="ui small bordered image"/>}
                </div>
                <div className="field">
                    <label htmlFor="text">Text</label>
                    <textarea name="text"
                              id="text"
                              value={this.state.text}
                              onChange={this.handleChange}
                              placeholder="Some text..."></textarea>
                    <span>{this.state.errors.text}</span>
                </div>
                <div className="field">
                    <button className="ui primary button">Save</button>
                </div>
            </form>
        )
        return (
            <div>
                { form } 
            </div>
        )
    }
}


export default PostForm;