// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AxiosFetch = () => {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
//         const jsonData = response.data;

//         setData(jsonData);
//         setIsLoading(false);
//         setError(null); // Clear any previous error
//       } catch (err) {
//         setError(err);
//         setIsLoading(false);
//       }
//     };

//     fetchData(); // Call the fetchData function inside the useEffect

//   }, []); // Dependency array, initiates the effect when the component mounts

//   return (
//     <div>
//       {isLoading && <p>Loading...</p>}
//       {error && <p>Error: {error.message}</p>}
//       {data && (
//         <div>
//           <h1>Data</h1>
//           <p>ID: {data.id}</p>
//           <p>Title: {data.title}</p>
//           <p>Completed: {data.completed ? 'Yes' : 'No'}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AxiosFetch;

import React, { useEffect, useState } from 'react'


const axiosCrud = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({
        title: '',
        body: ''
    });
    const [updatedPost, setUpdatedPost] = useState({
        id: '',
        title: '',
        body: ''
    })
    const [postIdToDelete, setPostIdToDelete] = useState('')
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
 
    // Fetch Posts on component mount.
    useEffect(() => {
        fetchPosts();
    }, [])

    const fetchPosts = async () => {
        setIsLoading(true);
        setError(null)

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const dataJson = await response.json()
            console.log(dataJson);
            if (!response.ok) {
                throw new Error(`Error ${response.status}`)
            }
            setPosts(dataJson)
            setIsLoading(false)
        } catch (err) {
            setError(err)
            setIsLoading(false)
        }
    }

    const addPost = async () => {
        try {
            setIsLoading(true)
            setError(null)


            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // JSON.stringify(newPost) is used to convert this JavaScript object into a JSON-formatted string. This is necessary because when you send data to a server in a POST request, it expects the data to be in JSON format in the request body.
                body: JSON.stringify(newPost)
            })
            if (!response.ok) {
                throw new Error(`Http error! Status: ${response.status}`)
            }
            const data = await response.json()
            // console.log(data)
            setPosts([...posts, data])
            setNewPost({ title: '', body: '' });
            setIsLoading(false)


        } catch (err) {
            setIsLoading(false)
            setError(err)
        }
    }

    // UPDATE POST
    const updatePost = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${updatedPost.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedPost)
            })
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            const updatedPosts = posts.map(post => post.id === data.id ? data : post)
            setPosts(updatedPosts)
            setUpdatedPost({ id: '', title: '', body: '' })
            setIsLoading(false)

        } catch (err) {
            setIsLoading(false)
            setError(err)
        }
    }

    // DELETE POST
    const deletePost = async () => {
        setIsLoading(true)
        setError(null);

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`,
                {
                    method: 'DELETE',
                }
            );
        
        if (response.status === 200) {
        // posts is an array of post objects.

        // postIdToDelete is the ID of the post you want to delete.

        // parseInt(postIdToDelete, 10) converts the postIdToDelete to an integer using base 10.

        // The filter method is applied to the posts array. It iterates through each post object in the array and checks if the id of the post matches the parsed postIdToDelete.

        // If the id of the post does not match the postIdToDelete, it's included in the new updatedPosts array.

        // If the id of the post matches the postIdToDelete, it's excluded from the new updatedPosts array.
    
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
    }

    return (
    <div>
        {isLoading && (
            <>
                Loading...
            </>
        )}
        {
            error && (
                <>
                {error.message} 
                </>
            )
        }
        {console.log(posts)}
        <ul>
                {posts.slice().reverse().slice(0, 10).map((post) => (
                <span>
                    <li key={post.id}>{post.title} by {post.userId === 1 ? "Grace" : post.userId}</li>
                </span>
        ))}
            </ul>
            
            {/* ADD POST */}
            <div>
                <input 
                    className='text-black'
                    type='text'
                    placeholder='Title'
                    value={newPost.title}
                    onChange={e => setNewPost({...newPost, title: e.target.value})}
                />
                <input
                    className='mx-2 text-black'
                    type='text'
                    placeholder='Body'
                    value={ newPost.body}
                    onChange={e => setNewPost({...newPost, body: e.target.value})}
                />
                <button onClick={addPost}>Add Post</button>
            </div>

            {/* UPDATE POST */}
            <input
            type="text"
            placeholder="Post ID"
            value={updatedPost.id}
            onChange={e => setUpdatedPost({ ...updatedPost, id: e.target.value })}
            />
            <input
            type="text"
            placeholder="Post Title"
            value={updatedPost.title}
            onChange={e => setUpdatedPost({ ...updatedPost, title: e.target.value })}
            />
            <input
            type="text"
            placeholder="Post Body"
            value={updatedPost.body}
            onChange={e => setUpdatedPost({ ...updatedPost, body: e.target.value })}
            />

            {/* DELETE POSTS */}
            <div>
                <input
                    type='text'
                    placeholder="Post ID to Delete"
                    value={postIdToDelete}
                    onChange={e=> setPostIdToDelete(e.target.value)}
                />
                <button onClick={deletePost}>Delete Post</button>
            </div>


    </div>
  )
}

export default axiosCrud



























