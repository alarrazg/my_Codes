import React from 'react';
import '../styleSheets/Counter.css';

function Counter({ numClicks }) {
	return (
		<div className='counter'>
			{numClicks}
		</div>
	)
}

export default Counter;