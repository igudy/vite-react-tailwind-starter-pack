import React, { useState } from 'react';
import Jsonplaceholder from './components/jsonplaceholder';
import Axios from './components/axios-sample-code';

function App() {

	return (
		<div className='font-serif bg-gray-900 text-white'>
			{/* <Jsonplaceholder/> */}
			<div className='mx-5'>
				<Axios />
			</div>
		</div>
	);
}

export default App;
