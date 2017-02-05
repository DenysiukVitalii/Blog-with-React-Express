import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter';
import selectedSource from './selectedSource';
import articles from './articles';

const blogApp = combineReducers({
	visibilityFilter,
	selectedSource,
	articles
})

export default blogApp;
