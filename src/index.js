import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {MarvelService} from './services/MarvelService';
import App from './App';

const marvelService = new MarvelService();

marvelService.getCharacterById(101).then(
    res => console.log(res)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
