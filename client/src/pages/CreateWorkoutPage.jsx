import Header from '../components/Header/index'
import { useState } from 'react';
import HomeMenu from '../components/HomeMenu';
import Feed from '../components/Feed';
import Footer from '../components/Footer/index'
import { redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useUserContext } from "../../utils/UserContext";

export default function CreateWorkoutPage() {
  // fetch for all exercise types


  return (
    <>
      <Header showMenu={showMenu} setShowMenu={setShowMenu}/>
      <div>
        <div>
          <input type="text" />
        </div>
        <div>
          <input type="text" name="reps" id="" />
        </div>

      </div>
      <Footer/>
    </>
  );
}