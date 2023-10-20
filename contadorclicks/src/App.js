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
        <div className='contenedor-counter'>
          <Counter numClicks={numClicks} />
          <Counter numClicks={numClicks} />
          <Counter numClicks={0} />
        </div>
        <div className='contenedor-button'>
          <Button
            text='Click'
            isButtonClick={true}
            handleClick={handleClick_1} />
          <Button
            text='Click'
            isButtonClick={true}
            handleClick={handleClick_2} />
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
