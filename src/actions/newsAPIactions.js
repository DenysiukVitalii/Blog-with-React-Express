export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_SOURCE = 'SELECT_SOURCE';
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';

// API key b6928391aad342c19c8f1a90c13c4571

export function selectSource(source) {
  return {
    type: SELECT_SOURCE,
    source
  }
}

export function requestPosts(source) {
  return {
    type: REQUEST_POSTS,
    source
  }
}

export function receivePosts(source, json) {
  return {
    type: REQUEST_POSTS,
    source,
    //posts: json.data.children.map(chsild => child.data)
    receivedAt: Date.now()
  }
}


/*
function fetchPosts(subreddit) {
  return dispatch => {
    dispatch(requestPosts(subreddit))
    return fetch(`https://newsapi.org/v1/articles?source=${source}&sortBy=latest&apiKey=b6928391aad342c19c8f1a90c13c4571`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(subreddit, json)))
  }
}
*/
