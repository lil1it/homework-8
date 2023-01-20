import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login";

import MainHeader from "./components/MainHeader/MainHeader";
import User from "./user/User";
import Timer from "./timer/Timer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [timer, setTimer] = useState(false);
  const [user, setUser] = useState(false);

  const showUsersHandler = () => {
    setUser(true);
    setTimer(false);
  };

  const showTimerHandler = () => {
    setUser(false);
    setTimer(true);
  };
  const loginHandler = () => {
    setIsLoggedIn(true);
    localStorage.setItem("login", "1");
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("login");
  };
  useEffect(() => {
    const saveData = localStorage.getItem("login");
    setIsLoggedIn(!!saveData);
  }, []);
  const LoginedState = isLoggedIn && !timer && !user;
  const firstState = isLoggedIn && timer;
  const secondState = isLoggedIn && user;

  return (
    <>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} showTimerHandler={showTimerHandler} showUsersHandler={showUsersHandler}  />
      <main>

        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {LoginedState && <User />}
        {firstState && <Timer/>}
        {secondState && <User />}
      </main>
    </>
  );
}

export default App;
