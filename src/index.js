import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApiProvider } from './Context/ApiContext';

ReactDOM.render(
  <Router>
    <ApiProvider>
      <App />
    </ApiProvider>
  </Router>,
  document.getElementById('root')
);
