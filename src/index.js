import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import './form.css';
import { BrowserRouter } from 'react-router-dom';
import Root from './context/root';
import 'react-toastify/dist/ReactToastify.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Root/>
    </BrowserRouter>
  </>
);
