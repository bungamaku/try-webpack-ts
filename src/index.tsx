import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './pages';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
