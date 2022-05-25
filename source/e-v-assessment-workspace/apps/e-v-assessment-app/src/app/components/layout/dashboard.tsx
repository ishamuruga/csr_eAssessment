import React from 'react'
import Content from './content';
import './dashboard.css';
import menu_data from './data';
import Navbar from './navbar';

export default function Dashboard() {
  return (
    <div className='page-wrapper chiller-theme toggled'>
        <Navbar value={menu_data}></Navbar>
        <Content></Content>
    </div>
  )
}
