import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import { StoreProvider } from 'easy-peasy';
import store from './store.jsx';

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <StoreProvider store={store}>
            <Router>
                <App />
            </Router>
        </StoreProvider>    
    </React.StrictMode>
)

