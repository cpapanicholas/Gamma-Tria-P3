import Header from '../components/Header/index'
import { useState } from 'react';
import HomeMenu from '../components/HomeMenu';
import Feed from '../components/Feed';
import Footer from '../components/Footer/index'


export default function HomePage() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Header showMenu={showMenu} setShowMenu={setShowMenu}/>
      {showMenu ? <HomeMenu/> : <Feed/>}
      <Footer/>
    </>
  );
}