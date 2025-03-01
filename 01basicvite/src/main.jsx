import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import App from './App.jsx'


const reactElement = React.createElement(
    'a',
    { href: 'https://google.com', target: '_blank' },
    'Click me'
);

createRoot(document.getElementById('root')).render(
    <App/>
)
