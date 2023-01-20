import React from "react";

import Navigation from "./Navigation";
import styled from "styled-components";

const MainHeader = (props) => {
  return (
    <MainHeaderStyle>
      <H1>A Typical Page</H1>
      <Navigation
        showUsersHandler={props.showUsersHandler}
        showTimerHandler={props.showTimerHandler}
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
      />
    </MainHeaderStyle>
  );
};

export default MainHeader;

const MainHeaderStyle = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #741188;
  padding: 0 2rem;
`
const H1 = styled.h1`
  color: white;
  
`
