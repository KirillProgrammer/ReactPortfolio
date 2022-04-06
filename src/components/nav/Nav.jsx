import React, { useState } from 'react';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import MainScreen from '../main/MainScreen';
import Projects from '../projects/Projects';
import Contacts from '../contact/Contacts';
import { RiHome3Line } from 'react-icons/ri';
import { AiOutlineCloseSquare } from "react-icons/ai";
import './nav.scss';

function Nav(props) {
  const [hamburger, setHamburger] = useState(false);
  function handleHamburger() {
    setHamburger(!hamburger);
  }
  return (
    <BrowserRouter>
      <nav className={ hamburger ? 'nav-is-active' : '' }>
        <span onClick={handleHamburger}>
          {hamburger ? <AiOutlineCloseSquare /> : <RiHome3Line /> }
        </span>
        <NavLink
          to='/'
          onClick={handleHamburger}
        >Обо мне</NavLink>
        <NavLink
          to='/projects'
          onClick={handleHamburger}
        >Мои проекты</NavLink>
        <NavLink
          to='/contacts'
          onClick={handleHamburger}
        >Связаться со мной</NavLink>
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

export default Nav;