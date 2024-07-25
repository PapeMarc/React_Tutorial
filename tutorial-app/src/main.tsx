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
