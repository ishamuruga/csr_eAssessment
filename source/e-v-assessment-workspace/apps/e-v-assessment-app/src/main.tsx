import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import  './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//import '@fortawesome/react-fontawesome';
//import '@font-awesome/css/font-awesome.min.css';
//import '@fortawesome/fontawesome-svg-core';
//import '@fortawesome/free-solid-svg-icons';
//import '@fortawesome/fontawesome-free-solid';

// import '@fortawesome/fontawesome-svg-core'
// import '@font-awesome/css/font-awesome.min.css';
// import '@fortawesome/free-solid-svg-icons'
// import '@fortawesome/fontawesome-free-solid';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
