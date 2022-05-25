// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Login from './components/auth/login';
import Landing from './components/modules/landing/landing';

import { useEffect,useState } from 'react';
import Dashboard from './components/layout/dashboard';


export function App() {

 // const [status,setStatus] = useState(false);

  // useEffect(()=>{
  //   console.log("I am frim use effect-1"+ new Date());
  // },[])

  // useEffect(()=>{
  //   console.log("I am frim use effect-2"+ new Date());
  // })

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
          {/* <Route path='/landing' element={<Landing/>}></Route> */}
          <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
