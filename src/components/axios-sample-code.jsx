import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AxiosFetch = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        const jsonData = response.data;

        setData(jsonData);
        setIsLoading(false);
        setError(null); // Clear any previous error
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };

    fetchData(); // Call the fetchData function inside the useEffect

  }, []); // Dependency array, initiates the effect when the component mounts

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <h1>Data</h1>
          <p>ID: {data.id}</p>
          <p>Title: {data.title}</p>
          <p>Completed: {data.completed ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  );
};

export default AxiosFetch;
