import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import HomePage from '../containers/HomePage';
import PostsPage from '../containers/PostsPage';
import PostFormPage from '../containers/PostFormPage';
import PostPage from '../containers/PostPage';

const ActiveLink = ({label, to, activeonlywhenexact}) => (
  <Route path={to} exact={activeonlywhenexact} children={({match}) => (
    <Link className={match ? 'active item' : 'item'} to={to}>{label}</Link>
  )}/>
);

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui menu">
          <div className="header item">
            Simple blog
          </div>
          <ActiveLink activeonlywhenexact={true} to="/" label="Posts" />
          <ActiveLink activeonlywhenexact={true} to="/posts" label="Admin" />
          <a className="item" href="https://denysiukvitalii.github.io">
            Contacts
          </a>
        </div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/posts" component={PostsPage} />
        <Route path="/posts/new" component={PostFormPage} />
        <Route path="/posts/edit/:_id" component={PostFormPage} />
        <Route path="/posts/post/:_id" component={PostPage} />
        <Route path="/post/:_id" component={PostPage} />
      </div>
    );
  }
}

export default App;
