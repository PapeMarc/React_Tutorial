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
