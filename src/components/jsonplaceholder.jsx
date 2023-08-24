// import React, { useEffect, useState } from 'react'

// const jsonplaceholder = () => {
//     // Set data, loading and error state

//     // useEffect to call the api endpoint

//     // empty bracket-dependency array for one time render

//     // if isloading give the prompt loading...

//     // if error give the prompt error

//     // if data print out the data from the endpoint

//     const [data, setData] = useState(null);
//     const [isLoading, setIsLoading] = useState(false)
//     const [error, setError] = useState(null)

//     useEffect(() => {
//         const fetchData = async() => {
//           try {
//               const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
              
//               if (!response.ok) {
//                   throw new Error(`Http error status ${response.status}`)
//               }

//             //   Parse the JSON response
//               const jsonData = await response.json();

//               setData(jsonData)
//               setIsLoading(false)

//               console.log(response)
//           } catch (err) {
//               setError(err)
//               setIsLoading(false);
//           }
//         }
//         fetchData()
//   }, [])
//     return (

//         <div>
//             <h1>
//                 JSONPLACEHOLDER
//             </h1>
//             {isLoading && <>Loading...</>}
//             {error && <p>Error: {error.message}</p>}
//             {data && (<>
//                 <h1>
//                     Data
//                 </h1>
//                 <div>{data.id}</div>
//                 <div>{data.title}</div>
//                 <div>{data.completed}</div>
//             </>

//             )}
//         </div>
//   )
// }

// export default jsonplaceholder










// ******** AXIOS CRUD OPERATIONS *************
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [posts, setPosts] = useState([]);
//   const [newPost, setNewPost] = useState({ title: '', body: '' });
//   const [updatedPost, setUpdatedPost] = useState({ title: '', body: '' });
//   const [postIdToDelete, setPostIdToDelete] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Fetch posts on component mount
//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const fetchPosts = async () => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//       setPosts(response.data);
//       setIsLoading(false);
//     } catch (err) {
//       setError(err);
//       setIsLoading(false);
//     }
//   };

//   const addPost = async () => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
//       setPosts([...posts, response.data]);
//       setNewPost({ title: '', body: '' });
//       setIsLoading(false);
//     } catch (err) {
//       setError(err);
//       setIsLoading(false);
//     }
//   };

//   const updatePost = async () => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       const response = await axios.put(
//         `https://jsonplaceholder.typicode.com/posts/${updatedPost.id}`,
//         updatedPost
//       );
//       const updatedPosts = posts.map(post =>
//         post.id === response.data.id ? response.data : post
//       );
//       setPosts(updatedPosts);
//       setUpdatedPost({ title: '', body: '' });
//       setIsLoading(false);
//     } catch (err) {
//       setError(err);
//       setIsLoading(false);
//     }
//   };

//   const deletePost = async () => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`);
//       const updatedPosts = posts.filter(post => post.id !== parseInt(postIdToDelete, 10));
//       setPosts(updatedPosts);
//       setPostIdToDelete('');
//       setIsLoading(false);
//     } catch (err) {
//       setError(err);
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>JSONPlaceholder App</h1>

//       <h2>Posts</h2>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>Error: {error.message}</p>
//       ) : (
//         <ul>
//           {posts.map(post => (
//             <li key={post.id}>{post.title}</li>
//           ))}
//         </ul>
//       )}

//       <h2>Add New Post</h2>
//       <div>
//         <input
//           type="text"
//           placeholder="Title"
//           value={newPost.title}
//           onChange={e => setNewPost({ ...newPost, title: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Body"
//           value={newPost.body}
//           onChange={e => setNewPost({ ...newPost, body: e.target.value })}
//         />
//         <button onClick={addPost}>Add Post</button>
//       </div>

//       <h2>Update Post</h2>
//       <div>
//         <input
//           type="text"
//           placeholder="Post ID"
//           value={updatedPost.id}
//           onChange={e => setUpdatedPost({ ...updatedPost, id: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Title"
//           value={updatedPost.title}
//           onChange={e => setUpdatedPost({ ...updatedPost, title: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Body"
//           value={updatedPost.body}
//           onChange={e => setUpdatedPost({ ...updatedPost, body: e.target.value })}
//         />
//         <button onClick={updatePost}>Update Post</button>
//       </div>

//       <h2>Delete Post</h2>
//       <div>
//         <input
//           type="text"
//           placeholder="Post ID to Delete"
//           value={postIdToDelete}
//           onChange={e => setPostIdToDelete(e.target.value)}
//         />
//         <button onClick={deletePost}>Delete Post</button>
//       </div>
//     </div>
//   );
// }

// export default App;

// JSONAPICALLS WITH FETCH OPERATIONS
import React, { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', body: '' });
  const [updatedPost, setUpdatedPost] = useState({ id: '', title: '', body: '' });
  const [postIdToDelete, setPostIdToDelete] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch posts on component mount
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setPosts(data);
      setIsLoading(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };

  const addPost = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setPosts([...posts, data]);
      setNewPost({ title: '', body: '' });
      setIsLoading(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };

  const updatePost = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${updatedPost.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedPost),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      const updatedPosts = posts.map(post =>
        post.id === data.id ? data : post
      );
      setPosts(updatedPosts);
      setUpdatedPost({ id: '', title: '', body: '' });
      setIsLoading(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };

  const deletePost = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`,
        {
          method: 'DELETE',
        }
      );
      if (response.status === 200) {
        const updatedPosts = posts.filter(post => post.id !== parseInt(postIdToDelete, 10));
        setPosts(updatedPosts);
        setPostIdToDelete('');
        setIsLoading(false);
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>JSONPlaceholder App</h1>

      <h2>Posts</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
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
          value={newPost.title}
          onChange={e => setNewPost({ ...newPost, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Body"
          value={newPost.body}
          onChange={e => setNewPost({ ...newPost, body: e.target.value })}
        />
        <button onClick={addPost}>Add Post</button>
      </div>

      <h2>Update Post</h2>
      <div>
        <input
          type="text"
          placeholder="Post ID"
          value={updatedPost.id}
          onChange={e => setUpdatedPost({ ...updatedPost, id: e.target.value })}
        />
        <input
          type="text"
          placeholder="Title"
          value={updatedPost.title}
          onChange={e => setUpdatedPost({ ...updatedPost, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Body"
          value={updatedPost.body}
          onChange={e => setUpdatedPost({ ...updatedPost, body: e.target.value })}
        />
        <button onClick={updatePost}>Update Post</button>
      </div>

      <h2>Delete Post</h2>
      <div>
        <input
          type="text"
          placeholder="Post ID to Delete"
          value={postIdToDelete}
          onChange={e => setPostIdToDelete(e.target.value)}
        />
        <button onClick={deletePost}>Delete Post</button>
      </div>
    </div>
  );
}

export default App;
