import React, { useEffect, useState } from 'react';

const AjaxFetch = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    xhr.onload = () => {
      if (xhr.status === 200) {
        const jsonData = JSON.parse(xhr.responseText);
        setData(jsonData);
        setIsLoading(false);
        setError(null);
      } else {
        setError(new Error(`HTTP error! Status: ${xhr.status}`));
        setIsLoading(false);
      }
    };

    xhr.onerror = () => {
      setError(new Error('Network error'));
      setIsLoading(false);
    };

    xhr.send();

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

export default AjaxFetch;
