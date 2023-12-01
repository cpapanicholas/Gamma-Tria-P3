import { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <UserContext.Provider value={{ currentUser: currentUser }} {...props} />
  );
};

export default UserProvider;
