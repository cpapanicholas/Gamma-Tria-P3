import React from 'react';
import Auth from '../../utils/auth';

const LogoutButton = ({ onLogout }) => {
  const handleLogout = () => {
    Auth.logout();
    // Call the onLogout function passed from the parent component
    if (typeof onLogout === 'function') {
      onLogout();
    }
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;