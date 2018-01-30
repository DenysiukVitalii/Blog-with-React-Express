import { SET_POSTS, ADD_POST, POST_FETCHED, POST_UPDATED, POST_DELETED } from '../types';

export default function posts(state = [], action = {}) {
    switch(action.type) {
        case ADD_POST:
            return [
                ...state,
                action.post
            ];
        case POST_FETCHED: 
            const index = state.findIndex(item => item._id === action.post._id);
            if (index > -1) {
                return state.map(item => 
                    (item._id === action.post._id) ? action.post : item
                );
            } else {
                return [
                    ...state,
                    action.post
                ]
            }
        case POST_UPDATED: 
            return state.map(item => 
                (item._id === action.post._id) ? action.post : item
            );
        case POST_DELETED:
            return state.filter(item => item._id !== action.postId);
        case SET_POSTS: 
            return action.posts;
        default: return state;
    }
}