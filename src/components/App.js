import React, { useState, useEffect } from "react";
import { authService } from "fbase";
import AppRouter from "components/Router";

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null); 

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });      
      }
      setInit(true);
    });
  }, [])
  /*;
  console.log(authService.currentUser)
  setInterval(() => {
    console.log(authService.currentUser)
  }, 2000);
  */

  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
  };

  return (
    <>
      { init ? <AppRouter isLoggedIn = {Boolean(userObj)} userObj = {userObj} refreshUser={refreshUser}/> : "Initializing ..." }
      <footer>&copy; {new Date().getFullYear()} Twitter</footer>
    </>
  );
}

export default App;