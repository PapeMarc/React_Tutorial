import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import Comp1 from './Comp1';

const reactRoot = ReactDOM.createRoot(document.getElementById("root")!);
reactRoot.render(<Comp1 />);