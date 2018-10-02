import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter';
import 'normalize.css/normalize.css';
import './Styles/style.scss';

const appRoot = document.querySelector('#UI-app');
ReactDOM.render(<AppRouter />, appRoot);