import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.tsx' 変更
import App from 'App'; // 追加
import './index.css';
/*
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
*/
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
