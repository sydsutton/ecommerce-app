import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ContextProvider } from "./Context"

import 'bootstrap/dist/css/bootstrap.css'
import './styles/styles.css';

ReactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>
, document.getElementById('root'));

