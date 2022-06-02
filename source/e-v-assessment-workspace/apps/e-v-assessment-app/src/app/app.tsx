// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/auth/login';
import Landing from './components/modules/landing/landing';

import { useEffect, useState } from 'react';
import Dashboard from './components/layout/dashboard';
import { EventType, QueueManager } from '@e-v-assessment-workspace/lib-auth';

export function App() {
  const [status,setStatus] = useState(false);

  useEffect(() => {
    console.log('I am frim use effect-1' + new Date());
    QueueManager.receiveMessage().subscribe((x: any) => {
      console.log("====================from APp. TSX");
      console.log(x);

      if (x.event === EventType.LOGIN_OK){
        setStatus(true);
      }
      return x;
    });
  }, []);

  useEffect(()=>{
     console.log("I am frim use effect-2"+ new Date());
  })

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
        {status && <Dashboard></Dashboard>}
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/landing" element={<Landing />}></Route>
          {/* <Route path='/dashboard' element={<Dashboard/>}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
