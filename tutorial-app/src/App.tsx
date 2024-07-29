//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

import CountButton from "./CountButton";
import { useState } from 'react';
import './App.css'

// Diese Funktion rendert die Komponente App.
function App() {
  const[increment, setIncrement] = useState(1); // useState darf nicht undefined sein.

  return <div className="App">
    <input title="inputField" type="number" value={increment} onChange={
      (event) => {
          setIncrement(parseInt(event.target.value,10));
        }}>
    </input>
    <CountButton initialValue={0} increment={increment}></CountButton>
  </div>;
}

export default App;
