function handleResponse(response) {
    if (response.ok) {
        return response.json();
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

export default {
    posts: {
        save: data => fetch('/api/posts', {
                            method: 'post',
                            body: JSON.stringify(data),
                            headers: {
                                "Content-Type": "application/json"
                            }
                      }).then(handleResponse),
        update: data => fetch(`/api/posts/edit/${data._id}`, {
                                method: 'put',
                                body: JSON.stringify(data),
                                headers: {
                                    "Content-Type": "application/json"
                                }
                        }).then(handleResponse),
        delete: id => fetch(`/api/posts/${id}`, {
                    method: 'delete',
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(handleResponse),
        fetchPosts: () => fetch('/api/posts').then(res => res.json()),
        fetchPost: id => fetch(`/api/posts/${id}`).then(res => res.json())
    }
}