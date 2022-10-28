import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NoteStore from "./store/NoteStore"
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
  <Provider store={NoteStore}>
    <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
