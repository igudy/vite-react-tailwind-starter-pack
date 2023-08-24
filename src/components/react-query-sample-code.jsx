import React from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

function App() {
  const queryClient = useQueryClient();

  // Fetch Posts
  const { data: posts, isLoading: isFetchingPosts, isError: fetchingPostsError } = useQuery(
    'posts',
    async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      return response.data;
    }
  );

  // Add Post
  const addPost = useMutation(
    newPost => {
      return axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries('posts');
      },
    }
  );

  // Update Post
  const updatePost = useMutation(
    updatedPost => {
      return axios.put(
        `https://jsonplaceholder.typicode.com/posts/${updatedPost.id}`,
        updatedPost
      );
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries('posts');
      },
    }
  );

  // Delete Post
  const deletePost = useMutation(
    postIdToDelete => {
      return axios.delete(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries('posts');
      },
    }
  );

  return (
    <div className="App">
      <h1>React Query App</h1>

      <h2>Posts</h2>
      {isFetchingPosts ? (
        <p>Loading...</p>
      ) : fetchingPostsError ? (
        <p>Error: {fetchingPostsError.message}</p>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}

      <h2>Add New Post</h2>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={addPost.variables?.title || ''}
          onChange={e => addPost.setVariables({ ...addPost.variables, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Body"
          value={addPost.variables?.body || ''}
          onChange={e => addPost.setVariables({ ...addPost.variables, body: e.target.value })}
        />
        <button onClick={() => addPost.mutate({ title: addPost.variables.title, body: addPost.variables.body })}>
          Add Post
        </button>
      </div>

      <h2>Update Post</h2>
      <div>
        <input
          type="text"
          placeholder="Post ID"
          value={updatePost.variables?.id || ''}
          onChange={e => updatePost.setVariables({ ...updatePost.variables, id: e.target.value })}
        />
        <input
          type="text"
          placeholder="Title"
          value={updatePost.variables?.title || ''}
          onChange={e => updatePost.setVariables({ ...updatePost.variables, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Body"
          value={updatePost.variables?.body || ''}
          onChange={e => updatePost.setVariables({ ...updatePost.variables, body: e.target.value })}
        />
        <button onClick={() => updatePost.mutate({ id: updatePost.variables.id, title: updatePost.variables.title, body: updatePost.variables.body })}>
          Update Post
        </button>
      </div>

      <h2>Delete Post</h2>
      <div>
        <input
          type="text"
          placeholder="Post ID to Delete"
          value={deletePost.variables || ''}
          onChange={e => deletePost.setVariables(e.target.value)}
        />
        <button onClick={() => deletePost.mutate(deletePost.variables)}>
          Delete Post
        </button>
      </div>
    </div>
  );
}

export default App;
