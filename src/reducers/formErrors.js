import { SAVE_POST_FAILURE, SAVE_POST_REQUEST } from '../types'; 

export default function formErrors(state = {}, action = {}) {
    switch(action.type) {
        case SAVE_POST_REQUEST: 
            return { ...state, errors: {} }
        case SAVE_POST_FAILURE: {
            console.log(action.errors)
            return { ...state, errors: action.errors }
        }
        default:
            return state;
    }
}