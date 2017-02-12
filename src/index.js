import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Admin from './components/Admin';
import Blog from './components/Blog';
import News from './components/News';
import PageNewsContainer from './containers/PageNewsContainer';

import blogApp from './reducers';
import { fetchPostsIfNeeded } from './actions/newsAPIactions';
import './components/index.css';

const loggerMiddleware = createLogger();

 let store = createStore(
  blogApp,
 	applyMiddleware(
    	thunkMiddleware, // lets us dispatch() functions
    	loggerMiddleware // neat middleware that logs actions
   	)
 );

 store.dispatch(fetchPostsIfNeeded('the-guardian-uk'));
 store.dispatch(fetchPostsIfNeeded('time'));

ReactDOM.render(
  <Provider store={store}>
    <Router history={ browserHistory }>
      <Route path='/' component={ App }>
        <IndexRoute component={ Blog } />
        <Route path='posts/:postId' component={PageNewsContainer} />
        <Route path="news" component={News} />
      </Route>
      <Route path='admin' component={Admin} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
