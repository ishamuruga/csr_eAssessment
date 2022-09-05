import react, { CSSProperties, useEffect, useState } from 'react';
import { Message, MessageService, fetch } from '../../lib-auth';
import './navbar.css';
import icn from './icon.webp';
import { Link, useNavigate } from 'react-router-dom';

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

  useEffect(() => {
    MessageService.receiveMessage().subscribe((x: any) => {
      console.log('====================');
      if (x.data) {
        const event = x.data.event;
        if (event == 'LOGIN_SUCESS') {
          setState(true);
        }
      } else {
        setState(false);
      }
      console.log(x);
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
    console.log(d);
  };

  return (
    <>
      <header>
        {/* Side bar */}
        {state && (
          <nav
            id="sidebarMenu"
            className="collapse d-lg-block sidebar collapse bg-white"
          >
            <div className="position-sticky">
              <div className="list-group list-group-flush mx-3 mt-4">
                {menu.map((x: any) => {
                  return (
                    <Link to={x.loc} className="list-group-item list-group-item-action py-2 ripple">
                      <i className="fa fa-rss fa-fw me-3"></i>
                      <span>{x.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </nav>
        )}

        {/* Top header */}
        {state && (
          <nav
            id="main-navbar"
            className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
          >
            <a className="navbar-brand container-fluid" href="#">
              <img
                src={icn}
                width="100"
                height="25"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="navbar-collapse collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto">
                <li
                  className="nav-item active"
                  onClick={() => menuClick('cec')}
                >
                  <a className="nav-link">
                    CeC <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item" onClick={() => menuClick('t4')}>
                  <a className="nav-link">T4</a>
                </li>
                <li className="nav-item" onClick={() => menuClick('metrics')}>
                  <a className="nav-link">Metrics</a>
                </li>

                <li className="nav-item" onClick={() => menuClick('logout')}>
                  <a className="nav-link disabled">Logout</a>
                </li>
              </ul>
            </div>
          </nav>
        )}
      </header>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            T4 Supply Chain Portal
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav> */}
    </>
    // <div>
    //   <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
    //     <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">My EAssessment</a>
    //       <ul className="navbar-nav px-3">
    //         <li className="nav-item text-nowrap">
    //           <a className="nav-link" href="#">Sign out</a>
    //         </li>
    //       </ul>
    //   </nav>
    // </div>
  );
};

export default Navbar;
