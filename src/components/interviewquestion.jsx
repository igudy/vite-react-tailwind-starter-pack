    // In a new React component, you're required to fetch data from the route https://coderbyte.com/api/challenges/json/age-counting. The returned JSON contains a data key, with its value being a string composed of items formatted as: key=STRING, age=INTEGER.

    // Your task:
    // Initialize a state variable using useState to store the modified JSON object.

    // Use the useEffect hook to trigger the data fetch operation when the component mounts.

    // Inside the useEffect, upon successfully fetching the data:

    // Process the string to filter out all key-value pairs where the age is equal to 1.

    // Update the state variable with the filtered data.

    // Render the number of keys present in the modified JSON object within your component.

    // Example output:
    // {"data":"key=IAfpK, age=2, key=WNVdi, age=1, key=jp9zt, age=47, key=jp9zt, age=1"}

    import React, { useEffect, useState } from 'react'

const interviewquestion = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    setError(false)
    try {
      const fetchData = async () => {
        const response = await fetch('https://coderbyte.com/api/challenges/json/age-counting')

        if (!response.ok) {
          throw new Error(`Error ${response.status}`)
        }

        const jsonData = response.json()
        console.log(jsonData);
        setData(jsonData)
      }
      fetchData()
    } catch (err) {
      setIsLoading(false)
      setError(err) 
    }
  }, []) //dependency array to run at initialization of the page
  return (
    <div>
      {isLoading && (<>
        Loading...
      </>)}
      {error && (<>
        {error.message}
      </>)}
      <div>
        <ul>


          {data.map((data) => (
            <li key={data.id}>
              {data.id}
          </li>
        ))}
        </ul>
      </div>
    </div>
  )
}

export default interviewquestion