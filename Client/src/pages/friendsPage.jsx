import Header from '../components/Header/index';
import Footer from '../components/Footer/index';
// FriendsPage.jsx
import React from 'react';
import FriendsList from '../components/MyFriends';

const FriendsPage = () => {
  return (
    <div>
       <Header/>
      <h1>Friends Page</h1>
      <FriendsList />
      <Footer />
    </div>
  );
};

export default FriendsPage;
