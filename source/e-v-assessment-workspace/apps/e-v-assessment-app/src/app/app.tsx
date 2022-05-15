// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
//import NxWelcome from './nx-welcome';
//import {LibAuth} from '@e-v-assessment-workspace/lib-auth';

import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Login from './components/auth/login';
import Landing from './components/modules/landing/landing';

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
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/landing' element={<Landing/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
