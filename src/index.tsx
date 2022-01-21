import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/index.css';
import AppMain from './ts/App';
import { reportWebVitals, Metric } from './ts/reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <AppMain />
    </React.StrictMode>,
    document.getElementById('root')
);

function sendMetric(arg: Metric) {
    window.debug(arg.name, arg.value);
}

reportWebVitals(sendMetric);