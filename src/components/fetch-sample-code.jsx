import React, { useState, useEffect } from 'react';

function FetchData() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch sample data
    const fetchData = async () => {
      try {
        // Replace this URL with your sample data endpoint
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

        // Check if the response status is okay (status code 200)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON response
        const jsonData = await response.json();

        // Update the state with the fetched data
        setData(jsonData);
        setIsLoading(false);
          
        //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json()).then(json => console.log(json))

      } catch (err) {
        // Handle any errors that occurred during the fetch
        setError(err);
        setIsLoading(false);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  return (
    <div>
      <h1>Fetch Sample Data</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <h2>Title: {data.title}</h2>
          <p>ID: {data.id}</p>
          <p>Completed: {data.completed ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  );
}

export default FetchData;
