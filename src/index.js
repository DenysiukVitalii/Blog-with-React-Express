import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import Immutable from 'immutable';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './reducers';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    Immutable.Map({}),
    composeWithDevTools(
        applyMiddleware(sagaMiddleware, thunk)
    )
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>, 
document.getElementById('root'));
registerServiceWorker();
