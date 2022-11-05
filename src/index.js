import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
// import styled, { createGlobalStyle } from 'styled-components';
// import styled from 'styled-components';

// const Global = createGlobalStyle`
// *{
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
//   /* background: green; */
//   font-family: consolas;

//   }
// `;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Global> */}
      <App />
    {/* </Global> */}
  </React.StrictMode>
);
