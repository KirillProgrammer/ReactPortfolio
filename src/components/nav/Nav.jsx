import React from 'react';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import MainScreen from '../main/MainScreen';
import Projects from '../projects/Projects';
import Contacts from '../contact/Contacts';
import './nav.scss';

function Nav(props) {
  return (
    <BrowserRouter>
      <nav>
        <NavLink
          to='/'
        >About Me</NavLink>
        <NavLink
          to='/projects'
        >My Projects</NavLink>
        <NavLink
          to='/contacts'
        >Contact Me</NavLink>
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<MainScreen />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default Nav