import React from 'react';
import ReactDOM from 'react-dom/client';

import {HelloWorldapp} from './HelloWorldapp';
import { Firstapp } from './Firstapp';

import './styles.css';
import { CounterApp } from './CounterApp';

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HelloWorldapp />
        <Firstapp title="Hola, Soy Goku" subTitle={123} />
        <CounterApp value={1234} />
    </React.StrictMode>
);