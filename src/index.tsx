import React from 'react';
import ReactDOM from 'react-dom/client';
import './static/css/index.css';
import App from './App';
import { reportWebVitals, Metric } from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function sendMetric(arg: Metric) {
    window.debug(arg.name, arg.value);
}

reportWebVitals(sendMetric);