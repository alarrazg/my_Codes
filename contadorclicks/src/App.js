import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const handleClick = () => {
    setNumClicks(numClicks + 1);
  }

  const resetCounter = () => {
    setNumClicks(0);
  }

  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <Counter numClicks={numClicks}/>
        <Button 
          text='Click'
          isButtonClick={true}
          handleClick={handleClick}/>
        <Button 
          text='Reiniciar'
          isButtonClick={false}
          handleClick={resetCounter}/>
      </div>
    </div>
  );
}

export default App;
