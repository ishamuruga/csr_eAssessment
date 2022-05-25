import react from 'react';
import $ from 'jquery';
import React,{useState,useEffect} from 'react'
import { faCloudDownloadAlt, faCropSimple } from '@fortawesome/free-solid-svg-icons';
import menu_data from './data';
import {QueueManager,EventType} from '@e-v-assessment-workspace/lib-auth';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';


interface menuflag {
  id:string;
  flag:boolean;
}

const Navbar = (props:any) => {

  const flags:menuflag[]=[
    {id:"abcd123",flag:false},
    {id:"abcd124",flag:false}
  ];



  
  const [status,setStatus] = useState(flags);
  const [menus,setMenus] = useState(menu_data);
  const [tUser,setTUser] = useState({
    firstName:"",
    lastName:"",
    url:""
  });

  // useEffect(()=>{
  //   console.log("================Navbar..."); 
  //   QueueManager.receiveMessage().subscribe((x:any)=>{
  //     console.log("!=!+!+!+!+!+!+!+!+!+");
  //     console.log(x);
  //     if (x.event === EventType.LOGIN_OK) {
  //       setTUser(x.payload);
  //     }
  //     console.log("Data Setting...============")
  //   })
  // })

  const handleCloseSideBar = () => {
    $(".page-wrapper").removeClass("toggled");
  }

  const handleOpenSideBar= () => {
    $(".page-wrapper").addClass("toggled");
  }

  const handleNewMenuDisplay = (data:string) => {
    alert("======");
    console.log(data);
    const name = data;
     menus.map((x:any)=>{
       console.log(x.key + "," + x)
       if (x.key===name){
         if (x.flag){
           $("#" + name).slideUp(200);    
         } else {
           $("#" + name).slideDown(200);    
         }
         x.flag = !x.flag
       }
       return x;
     })
  }

  const handleMenuDisplay = (e:any) => {
    console.log(new Date());
    
    const name = e;
    console.log(name);

    status.map((x:menuflag)=>{
      console.log(x);
      if (x.id===name){
        if (x.flag){
          $("#" + name).slideUp(200);    
        } else {
          $("#" + name).slideDown(200);    
        }
        x.flag = !x.flag
      }
      return x;
    })
    
    

    $(".sidebar-dropdown").addClass("active");
    $("#abcd").slideDown(200);
    //$(".sidebar-submenu").slideDown(200);
    //$(".sidebar-dropdown").addClass("active");
    // if (
    //   $(this)
    //     .parent()
    //     .hasClass("active")
    // ) {
    //   $(".sidebar-dropdown").removeClass("active");
    //   $(this)
    //     .parent()
    //     .removeClass("active");
    // } 
  }

  return (
    <div>
      <a id="show-sidebar" onClick={handleOpenSideBar} className="btn btn-sm btn-dark" href="#">
        <i className="fas fa-bars"></i>
      </a>

      <nav id="sidebar" className="sidebar-wrapper">
        <div className="sidebar-content">
          <div className="sidebar-brand">
            <a href="#">pro sidebar</a>
            <div id="close-sidebar" onClick={handleCloseSideBar}>
              <i className="fas fa-times"></i>
            </div>
          </div>
          <div className="sidebar-header">
            <div className="user-pic">
              <img className="img-responsive img-rounded" src={tUser.url} alt="User picture"/>
            </div>
            <div className="user-info">
              <span className="user-name">{tUser.firstName}
                <strong>{tUser.lastName}</strong>
              </span>
              <span className="user-role">Administrator</span>
              <span className="user-status">
                <i className="fa fa-circle"></i>
                <span>Online</span>
              </span>
            </div>
          </div>
          <div className="sidebar-search">
            <div>
              <div className="input-group">
                <input type="text" className="form-control search-menu" placeholder="Search..."/>
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </span>
                  </div>
              </div>
            </div>
          </div>
          <div className="sidebar-menu">
            <ul>
              <li className="header-menu">
                <span>General</span>
              </li>
              {
                menus.map((x:any)=>{
                  return (
                    <li key={x.id} className="sidebar-dropdown">
                      <a onClick={()=>handleNewMenuDisplay(x.key)}>
                        <i className="fa fa-tachometer-alt"></i>
                        <span>{x.label}</span>
                        <span className="badge badge-pill badge-warning">New</span>
                      </a>
                      <div id={x.key} className="sidebar-submenu">
                      <ul>
                        {
                          x.subMemu.map((sm:any)=>{
                            return (
                              <li key={sm.id}>
                                <Link to="/landing">Landing</Link>
                                <a href="#">{sm.label}
                                <span className="badge badge-pill badge-success">Pro</span>
                                </a>
                              </li>        
                            )
                          })
                        }
                     
                      </ul>
                      </div>
                    </li>      
                  )
                })
              }
              <li className="header-menu">
                <span>Extra</span>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-book"></i>
                  <span>Documentation</span>
                  <span className="badge badge-pill badge-primary">Beta</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-calendar"></i>
                  <span>Calendar</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-folder"></i>
                  <span>Examples</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="sidebar-footer">
          <a href="#">
            <i className="fa fa-bell"></i>
            <span className="badge badge-pill badge-warning notification">3</span>
          </a>
          <a href="#">
            <i className="fa fa-envelope"></i>
            <span className="badge badge-pill badge-success notification">7</span>
          </a>
          <a href="#">
            <i className="fa fa-cog"></i>
            <span className="badge-sonar"></span>
          </a>
          <a href="#">
            <i className="fa fa-power-off"></i>
          </a>
        </div>
      </nav>
    </div>
  )
};

export default Navbar;