import React, { CSSProperties, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MessageService, fetch } from '../../lib-auth';
import './sidebar.css';

export default function Sidebar() {
  const [state, setState] = useState(false);
  const [menu, setMenu] = useState<any[]>([]);

  // const min_width_225_styl: CSSProperties = {
  //   minWidth: '225px',
  // };

  // const marging_top_58_styl: CSSProperties = {
  //   marginTop: '58px',
  // };
  const nav = useNavigate();

  useEffect(() => {
    MessageService.receiveMessage().subscribe((x: any) => {
      //console.log('====================');
      if (x.data) {
        const event = x.data.event;
        if (event == 'LOGIN_SUCESS') {
          setState(true);
        }
        if (event == 'MENU_CLICK_CEC') {
          setMenu(x.data.payload.smenu);
          setState(true);
        }
        if (event == 'MENU_CLICK_T4') {
          setMenu(x.data.payload.smenu);
          setState(true);
        }
      } else {
        setState(false);
      }
      //console.log(x);
    });
  });

  useEffect(() => {
    menuClick('cec');
  }, []);

  const menuClick = (val: string) => {
    if (val == 'logout') {
      nav('/');
      return;
    }

    const d: any[] = fetch(val);
    setMenu(d);
    //console.log(d);
  };

  return (
    <div>
      {state && (
        <nav
          id="sidebarMenu"
          className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
        >
          <div className="sidebar-sticky pt-3">
            <ul className="nav flex-column">
              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Sub Menus</span>
                <a
                  className="d-flex align-items-center text-muted"
                  href="#"
                  aria-label="Add a new report"
                >
                  <span data-feather="plus-circle"></span>
                </a>
              </h6>

              {menu.map((x: any) => {
                return (
                  <li className="nav-item">
                    <Link to={x.loc} className="custom nav-link">
                      <span data-feather="home"></span> {x.name}{' '}
                      <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      )}
    </div>
  );
}
