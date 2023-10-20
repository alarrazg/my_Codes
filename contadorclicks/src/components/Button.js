import React from 'react';
import '../styleSheets/Button.css';

function Button({ text, isButtonClick, handleClick }){
	return (
		<button 
			className={isButtonClick ? 'button-click' : 'button-reset'}
			onClick={handleClick}>
			{text}
		</button>
	)
}

export default Button;