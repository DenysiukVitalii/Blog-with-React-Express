import * as types from '../types';
import { setDateFilter } from './filters';
import api from '../api';

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
    api.posts.save(data)
             .then(data => dispatch(addPost(data.post)));


export const updatePost = data => dispatch => 
    api.posts.update(data)
             .then(data => dispatch(postUpdated(data.post)));


export const deletePost = id => dispatch => 
    api.posts.delete(id)
             .then(data => dispatch(postDeleted(id)));


export const fetchPosts = () => dispatch => 
    api.posts.fetchPosts()
       .then(data => dispatch(setPosts(data.posts)))
       .then(data => dispatch(setDateFilter()));


export const fetchPost = id => dispatch => 
    api.posts.fetchPost(id)
       .then(data => dispatch(postFetched(data.post)));
