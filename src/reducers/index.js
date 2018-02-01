import { combineReducers } from 'redux-immutable';

import posts from './posts';
import filters from './filters';
import formErrors from './formErrors';

export default combineReducers({
    posts,
    filters,
    formErrors
});