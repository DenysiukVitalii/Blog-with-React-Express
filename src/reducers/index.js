import { combineReducers } from 'redux-immutable';

import posts from './posts';
import filters from './filters';

export default combineReducers({
    posts,
    filters
});