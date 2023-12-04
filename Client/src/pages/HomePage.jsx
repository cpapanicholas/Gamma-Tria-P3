import Header from '../components/Header/index'
import { useState } from 'react';
import HomeMenu from '../components/HomeMenu';
import Feed from '../components/Feed';
import Footer from '../components/Footer/index'
import { redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useUserContext } from "../../utils/UserContext";

export default function HomePage() {
  const [showMenu, setShowMenu] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const userContext = useUserContext();
  console.log(userContext);

  // if (!loggedIn) {
  //   window.location.replace('/login')
  // }

  return (
    <>
      <Header showMenu={showMenu} setShowMenu={setShowMenu}/>
      {showMenu ? <HomeMenu/> : <Feed/>}
      <Footer/>
    </>
  );
}