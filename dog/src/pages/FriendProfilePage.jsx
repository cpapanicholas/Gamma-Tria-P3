// FriendProfilePage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const FriendProfilePage = () => {
  const { friendUsername } = useParams();

  // Fetch data for the specific friend using friendUsername

  return (
    <div>
      <h2>{friendUsername}'s Profile</h2>
      {/* Display friend's profile information */}
    </div>
  );
};

export default FriendProfilePage;