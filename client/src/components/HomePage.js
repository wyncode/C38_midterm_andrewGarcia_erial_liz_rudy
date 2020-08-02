import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SearchNav from './SearchNav';
import TopicNav from './TopicNav';
import HomeBody from './HomeBody';

const HomePage = () => {
  return (
    <>
      {/* <TopicNav /> */}
      <HomeBody />
    </>
  );
};

export default HomePage;
