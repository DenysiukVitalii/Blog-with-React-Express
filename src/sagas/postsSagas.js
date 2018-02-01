import { call, put } from 'redux-saga/effects';
import { addPost, savePostFailure } from '../actions/posts';
import api from '../api';

export function* savePostSaga(action) {
    try {
        const post = yield call(api.posts.save, action.data);
        yield put(addPost(post.post));
    } catch (err) {
        console.log(err.response)
        yield put(savePostFailure(err.response));
    }
    
}