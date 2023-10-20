import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {

  const [numClicks1, setNumClicks1] = useState(0);
  const [numClicks2, setNumClicks2] = useState(0);

  const handleClick1 = (nClick) => {
    setNumClicks1(numClicks1 + 1);
  }

  const handleClick2 = (nclick) => {
    setNumClicks2(numClicks2 + 1);
  }
      

  const resetCounter = () => {
    setNumClicks1(0);
    setNumClicks2(0);
  }

  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <div className='contenedor-counter'>
          <Counter numClicks={numClicks1} />
          <Counter numClicks={numClicks2} />
          <Counter numClicks={numClicks1 + numClicks2} />
        </div>
        <div className='contenedor-button'>
          <Button
            text='Click'
            isButtonClick={true}
            handleClick={handleClick1} />
          <Button
            text='Click'
            isButtonClick={true}
            handleClick={handleClick2} />
          <Button
            text='Reiniciar'
            isButtonClick={false}
            handleClick={resetCounter} />
        </div>
      </div>
    </div>
  );
}

export default App;
