import React from 'react'

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

const interviewquestion = () => {
  return (
    <div>interviewquestion</div>
  )
}

export default interviewquestion