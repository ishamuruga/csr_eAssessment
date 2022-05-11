import logo from './logo.svg';
import './App.css';
import { VButton } from 'lib-auth';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Login from './components/auth/Login';
import Landing from './components/landing/Landing';

function App() {
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
          <Route exact  path='/' element={<Login/>}></Route>
          <Route exact  path='/landing' element={<Landing/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
