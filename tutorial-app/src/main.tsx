import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

/*Erstellt ein React-Wurzelobjekt*/
const reactRoot = ReactDOM.createRoot(document.getElementById('root')!);

/* Rendert den übergebenen Code in eine Document Objekt Model (DOM) Instanz.*/
reactRoot.render(
  <React.StrictMode>
    <App /> {/* Hier wird die App-Komponente (App.tsc) dem Renderer übergeben*/}
  </React.StrictMode>,
)

// Let, Var und Const
/*
var c = 0;    var wird bei Start der Anwendung deklariert und ist global (also über Klarmmergrenzen hinweg) bekannt.
let c = 0;    let wird erst an der eigentlichen Stelle im Code bekannt, an der es auch lokal deklariert wird. Klammergrenzen werden berücksichtigt.
const c = 0;  Initialisierung und Deklaration geschehen gleichzeitig. Nach Initialisierung ist der gespeicherte Wert Unveränderbar. Klammergrenzen werden Berücksichtigt.
*/

// Destructuring
/*
kann man machen:
  const obj = {x: 1, y: 2};
  const x = obj.x;
  const y = obj.y;
  console.log(x,y);

besser destructiuring benutzen(zerlegen von Instanzen):
  const obj = {x: 1, y: 2};
  const {x,y} = obj;
  console.log(x,y);
*/
