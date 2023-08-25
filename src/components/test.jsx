import React, { useEffect, useState } from 'react';

const InterviewQuestion = () => {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [keyCount, setKeyCount] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    try {
      const fetchData = async () => {
        const response = await fetch('https://coderbyte.com/api/challenges/json/age-counting');

        if (!response.ok) {
          throw new Error(`Error ${response.status}`);
        }

        const jsonData = await response.json();

        // Process the JSON data to filter out key-value pairs where age is equal to 1
        const filteredData = jsonData.data
          .split(', ')
          .filter(item => {
            const [, age] = item.split('=');
            return parseInt(age) !== 1;
          })
          .join(', ');

        // Update state with the filtered data
        setData(`{"data": "${filteredData}"}`);

        // Count the number of keys in the modified JSON object
        const keys = filteredData.split(', ').length;
        setKeyCount(keys);

        setIsLoading(false);
      };

      fetchData();
    } catch (err) {
      setIsLoading(false);
      setError(err);
    }
  }, []);

  return (
    <div>
      {isLoading && (
        <>
          Loading...
        </>
      )}
      {error && (
        <>
          {error.message}
        </>
      )}
      <div>
        <p>Modified JSON Data: {data}</p>
        <p>Number of Keys: {keyCount}</p>
      </div>
    </div>
  );
};

export default InterviewQuestion;
