import * as types from '../types';
import { setDateFilter } from './filters';

function handleResponse(response) {
    if (response.ok) {
        return response.json();
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

export const setPosts = posts => ({
    type: types.SET_POSTS, 
    posts
})

export const addPost = post => ({
    type: types.ADD_POST,
    post
}) 

export const postFetched = post => ({
    type: types.POST_FETCHED,
    post
})

export const postUpdated = post => ({
    type: types.POST_UPDATED,
    post
})

export const postDeleted = postId => ({
    type: types.POST_DELETED,
    postId
})

export const savePost = data => dispatch => 
fetch('/api/posts', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
}).then(handleResponse)
.then(data => dispatch(addPost(data.post)));

export const updatePost = data => dispatch => 
fetch(`/api/posts/edit/${data._id}`, {
    method: 'put',
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json"
    }
}).then(handleResponse)
.then(data => dispatch(postUpdated(data.post)));

export const deletePost = id => dispatch => 
fetch(`/api/posts/${id}`, {
    method: 'delete',
    headers: {
        "Content-Type": "application/json"
    }
}).then(handleResponse)
.then(data => dispatch(postDeleted(id)));

export const fetchPosts = () => dispatch => {
fetch('/api/posts')
    .then(res => res.json())
    .then(data => dispatch(setPosts(data.posts)))
    .then(data => dispatch(setDateFilter()));
}

export const fetchPost = id => dispatch => {
fetch(`/api/posts/${id}`)
    .then(res => res.json())
    .then(data => dispatch(postFetched(data.post)));
}