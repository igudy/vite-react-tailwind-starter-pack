import React, { useState } from 'react';

// Build an app that helps to increment
function App() {
	// define state
	// define function to add and subtract
	// create button to add and minus(add an onclick funtion to increment and decrement)

	const [number, setNumber] = useState(0)

	const increment = () => {
		setNumber(number + 1)
	}

	const decrement = () => {
		setNumber(number - 1)
	}

	return (
		<div className='text-center justify-center align-center text-2xl'>
			<h1>Increment and Decrement</h1>
			<button className='mr-4 border-2 p-4' onClick={increment}> + </button>
			{number}
			<button className='ml-4 border-2 p-4' onClick={decrement}> - </button>
		</div>
	);
}

export default App;
