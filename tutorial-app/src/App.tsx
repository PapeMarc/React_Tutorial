//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

import CountButton from "./CountButton";

import './App.css'

// Diese Funktion rendert die Komponente App.
function App() {
  return <div className="App">
    <CountButton initialValue={0} increment={1}></CountButton>
    <CountButton initialValue={-2} increment={2}></CountButton>
  </div>;
}

export default App;
