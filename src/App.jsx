import React, { useState } from 'react';
import Jsonplaceholder from './components/jsonplaceholder';
import Interviewquestion from './components/interviewquestion';
import Axios from './components/axios-sample-code';

function App() {

	return (
		<div className='font-serif bg-gray-900 text-white'>
			{/* <Jsonplaceholder/> */}
			<div className='mx-5'>
				{/* <Axios /> */}
				<Interviewquestion />
			</div>
		</div>
	);
}

export default App;
