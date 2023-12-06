import Header from '../components/Header/index'
import { useState, useEffect  } from 'react';
import HomeMenu from '../components/HomeMenu';
import Feed from '../components/Feed';
import Footer from '../components/Footer/index'
import { redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useUserContext } from "../../utils/UserContext";
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_PUBLIC_WORKOUTS } from '../../utils/queries';

export default function HomePage() {
  const [showMenu, setShowMenu] = useState(false);
  const userInfo = Auth.getProfile();

  const { loading, error, data } = useQuery(QUERY_PUBLIC_WORKOUTS, {
    variables: { originalId: "" },
  }); 
  console.log(data);
  return (
    <>
      <Header showMenu={showMenu} setShowMenu={setShowMenu}/>
      {showMenu ? <HomeMenu/> : <Feed/>}
      <Footer/>
    </>
  );
}