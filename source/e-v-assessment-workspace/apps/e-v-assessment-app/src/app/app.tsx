// eslint-disable-next-line @typescript-eslint/no-unused-vars
import  './app.css';
//import NxWelcome from './nx-welcome';
//import {LibAuth} from '@e-v-assessment-workspace/lib-auth';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/auth/login';
import Landing from './components/modules/landing/landing';

import { Navbar, Sidebar } from '@e-v-assessment-workspace/lib-auth';

//import { library } from '@fortawesome/fontawesome-svg-core'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { fab } from '@fortawesome/free-brands-svg-icons'
// import  '@fortawesome/free-solid-svg-icons'

// import '@fortawesome/free-regular-svg-icons';
// import '@fortawesome/fontawesome-svg-core';
// import '@fortawesome/free-solid-svg-icons';

import 'font-awesome/css/font-awesome.min.css';
import AddCecData from './components/modules/cec/add-cec-data';

export function App() {
  return (
    <div>
      <Router>
        {/* <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/landing">Landing</Link>
          </li>
        </ul> */}
        {/* className="col-md-9 ml-sm-auto col-lg-10 px-md-4" */}
        <Navbar></Navbar>
        <div>
          <Sidebar></Sidebar>
          <main role="main" >
            <div>
              <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/landing" element={<Landing />}></Route>
                <Route path="/addcec" element={<AddCecData />}></Route>
              </Routes>
            </div>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
