import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import * as objMod1 from './mod1.ts';
//import {doIt, doIt2} from './mod1.ts'; // Importiert die exportierte Funktion doIt aus mod1.ts
//import {doIt as doItNow, doIt2 as doItNow2} from './mod1.ts'; // geht auch, falls Methoden in diesem Kontext schon vorhanden sind.
import makeItNow from './mod1.ts'; // diese Schreibweise ist erlaubt durch "export default"

/*Erstellt ein React-Wurzelobjekt*/
const reactRoot = ReactDOM.createRoot(document.getElementById('root')!);

/* Rendert den übergebenen Code in eine Document Objekt Model (DOM) Instanz.*/
reactRoot.render(
  <React.StrictMode>
    <App /> {/* Hier wird die App-Komponente (App.tsc) dem Renderer übergeben*/}
  </React.StrictMode>,
)

//reactRoot.render(<div><div>Hello World!</div></div>)
//reactRoot.render(React.createElement("div", null, React.createElement("div", null, "Hello World!")))
//reactRoot.render(React.createElement(App, null, null))


//doIt(); //Verwendung einer importierten Funktion
objMod1.doIt(); // Verwendung einer Funktion einer Sammlung aller exportierten Inhalte aus mod1 als Instanz.
objMod1.doIt2();

makeItNow(); // entspricht der Methode makeIt aus mod1, da dies der Standardexport für mod1 ist.

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

// Arrow-Functions
/*

Bsp.1:

Normale anonyme Funktio:
  setTimeout(function (){ console.log("Hello World!"); }, 1000);

Arrow-Functions Syntax:
  setTimeout(() => { console.log("Hello World!"); }, 1000);


Bsp.2:

Normal:

  const array = [1,2,3,4,5];
  const index = array.findIndex(function(element){
    return element === 3;
  })
  console.log(index);

Arrow-Functions stattdessen:

  const array = [1,2,3,4,5];
  const index = array.findIndex(element => element === 3;); //Ähnlich zu Prädikaten in C#
  console.log(index);


Bsp.3:

  const obj = {text: "text"};

  obj.print = function(){
    setTimeout(function(){
      console.log(this.text)  // this funktioniert an dieser Stelle nicht, da sich der Kontext ändert.
    })
  }
  
  // Alternative mit Arrow-Syntax:
  obj.print = function(){
    setTimeout(() => {console.log(this.text)})
  }

  //oder auch:
   obj.print = function(){
    setTimeout(() => console.log(this.text))
  }

  obj.print()



*/
