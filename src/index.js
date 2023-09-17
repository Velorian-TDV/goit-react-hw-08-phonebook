import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './redux/store';
import App from './Components/App';
import './style/style.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter basename='/goit-react-hw-08-phonebook'>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);