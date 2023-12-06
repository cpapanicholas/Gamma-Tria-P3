import { logMissingFieldErrors } from '@apollo/client/core/ObservableQuery';
import { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext)

const UserProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({});
  const [fruit, setFruit] = useState("");


  // Example function to update the user context
  // const updateUser = async (newUser) => {
  //   console.log(newUser);    
  //   await setCurrentUser(newUser);
  // };

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, fruit, setFruit }} {...props} />
  );
};

export default UserProvider;
