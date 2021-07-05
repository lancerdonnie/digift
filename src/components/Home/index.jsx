import React from 'react';
import './Home.css';
import Button from '../Button';
import man from './manpng 1.png';
import back from './back.svg';

const Home = () => {
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${back})?inline`,
      }}
    >
      <div className="home__main">
        <div className="home__main__title">
          <span>Best Cards</span> at your disposal
        </div>
        <div className="home__buttons">
          <Button style={{ flex: 1 }} classnames="color-alt-2 bd-alt-2 br-alt">
            email Address
          </Button>
          <Button
            style={{ flex: 1.4, paddingTop: 20, paddingBottom: 20 }}
            classnames="bg-alt bd-alt"
          >
            Notify Me
          </Button>
        </div>
      </div>
      <div className="home__pic">
        <img src={man} alt="man image" />
      </div>
      <div className="home__rect--1" />
      <div className="home__rect--2" />
    </div>
  );
};

export default Home;
