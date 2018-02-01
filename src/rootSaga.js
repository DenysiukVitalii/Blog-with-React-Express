import { takeLatest } from 'redux-saga/effects';
import { SAVE_POST_REQUEST } from './types';
import { savePostSaga } from './sagas/postsSagas';


export default function* rootSaga() {
    yield takeLatest(SAVE_POST_REQUEST, savePostSaga)
} 