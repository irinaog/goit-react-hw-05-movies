import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./components/App";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import './index.css';
// import { App } from 'components/App';
// import { BrowserRouter } from 'react-router-dom';


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <App/>
//   </BrowserRouter>
//   </React.StrictMode>
  
// );
