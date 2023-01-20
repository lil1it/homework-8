import React from 'react';

import Card from '../UI/Card/Card';
import styled from "styled-components";

const Home = () => {
  return (
    <Card >
      <Text>Welcome back!</Text>
    </Card>
  );
};

export default Home;

const Text = styled.h1`
    width: 90%;
  max-width: 40rem;
  padding: 3rem;
  margin: 2rem auto;
  text-align: center;

`
