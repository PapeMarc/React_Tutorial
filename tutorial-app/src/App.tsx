import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { useState } from 'react'; // Ermöglicht die Zuordnung von Zuständen zu Komponenten
import './App.css'

// Diese Funktion rendert die Komponente App.
function App() {

  //const counterState = useState(0); // useState für numerische Werte.
  //const counter = counterState[0]; // Variable, welchen den Zustand der Komponente beeinflusst auf [0].
  //const setCounter = counterState[1]; // Funktion zur Änderung der Variable auf [1].
  
  const [counter, setCounter] = useState(0); // destructiuring verwenden :)

  return (
    <div className="App">
      <button onClick={() => {setCounter((counter) => counter + 1);}}>
        Current count is: {counter}
      </button>
    </div>
  );
}

export default App;
