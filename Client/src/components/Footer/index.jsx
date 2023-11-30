import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faHouse, faCalendar, faBookmark, faUser } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react';
// import Auth from '../../utils/auth';
// import Searchbar from './Searchbar';

export default function Footer ({ showMenu, setShowMenu}) {
  const handleMenu = () => setShowMenu(!showMenu);

  return (
    <div className='bg-dark d-flex justify-content-around fixed-bottom p-2'>
      <Link className='footer-icon' to={'/search'}><FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff",}} /></Link>
      <Link className='footer-icon' to={'/calendar'}><FontAwesomeIcon icon={faCalendar} style={{color: "#ffffff",}} /></Link>
      <Link className='footer-icon' to={'/home'}><FontAwesomeIcon icon={faHouse} style={{color: "#ffffff",}} /></Link>
      <Link className='footer-icon' to={'/library'}><FontAwesomeIcon icon={faBookmark} style={{color: "#ffffff",}} /></Link>
      <Link className='footer-icon' to={'/profile/me'}><FontAwesomeIcon icon={faUser} style={{color: "#ffffff",}} /></Link>
    </div>
  );
};
