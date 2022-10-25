import './index.scss';
import React from 'react';

function App() {
  let [count, setCount] = React.useState(1)

  const onClickPlus = () => {
   setCount(count+ 1)
  }

  const onClickMinuse = () => {
    setCount(count-1 )
   }
  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={onClickMinuse} className="minus">- Минус</button>
        <button onClick={onClickPlus} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;
