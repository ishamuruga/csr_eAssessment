import React, { CSSProperties, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageService, fetch } from '../../lib-auth';

const Navbar = () => {
  const [state, setState] = useState(false);
  const [menu, setMenu] = useState<any[]>([]);

  const min_width_225_styl: CSSProperties = {
    minWidth: '225px',
  };

  const marging_top_58_styl: CSSProperties = {
    marginTop: '58px',
  };
  const nav = useNavigate();

  // useEffect(() => {
  //   MessageService.receiveMessage().subscribe((x: any) => {
  //     console.log('====================');
  //     if (x.data) {
  //       const event = x.data.event;
  //       if (event == 'LOGIN_SUCESS') {
  //         setState(true);
  //       }
  //     } else {
  //       setState(false);
  //     }
  //     console.log(x);
  //   });
  // });

  useEffect(() => {
    menuClick('cec');
  }, []);

  const menuClick = (val: string) => {
    if (val == 'logout') {
      nav('/');
      return;
    }

    MessageService.sendMessage({
      event: 'MENU_CLICK_'+val.toUpperCase(),
      payload: {
        status: true,
        smenu: fetch(val)
      },
      ts: new Date(),
    });

    //const d: any[] = fetch(val);
    //console.log(d);
    //setMenu(d); 
    //console.log(d);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
        <a className="navbar-brand" href="#">
          Cnl Portal
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="custom nav-link" onClick={()=>menuClick('cec')}>
                CEC <span className="sr-only">(current)</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="custom nav-link"  onClick={()=>menuClick('t4')}>
                T4 Track <span className="sr-only">(current)</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="custom nav-link"  onClick={()=>menuClick('metrics')}>
                Metrics <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="custom nav-link"  onClick={()=>menuClick('logout')}>
                Logout <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
