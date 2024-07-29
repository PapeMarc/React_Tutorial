import { useState } from 'react'; // Ermöglicht die Zuordnung von Zuständen zu Komponenten

export default function CountButton(props : any) {

    //const counterState = useState(0); // useState für numerische Werte.
    //const counter = counterState[0]; // Variable, welchen den Zustand der Komponente beeinflusst auf [0].
    //const setCounter = counterState[1]; // Funktion zur Änderung der Variable auf [1].

    const [counter, setCounter] = useState(props.initialValue); // destructiuring verwenden :)

    return (
        <button onClick={() => { 
            setCounter(counter + props.increment); 
        }}>
            {counter}
        </button>
    );

};