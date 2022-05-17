import React from 'react'
import Content from './content';
import './dashboard.css';
import Navbar from './navbar';

export default function Dashboard() {
  return (
    <div className='page-wrapper chiller-theme toggled'>
        <Navbar></Navbar>
        <Content></Content>
    </div>
  )
}
