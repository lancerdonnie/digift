import React from 'react';
import './Home.css';
import Button from '../Button';
import man from './manpng 1.png';

const Home = () => {
  return (
    <div className="home">
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
      <div
        style={{
          height: '18.438rem',
          width: '32.125rem',
          backgroundColor: 'white',
          transform: 'rotate(40.38deg)',
          position: 'absolute',
          bottom: '-6.25rem',
          left: '-10rem',
        }}
      />
      <div
        style={{
          height: '27.531rem',
          width: '47.97rem',
          backgroundColor: 'white',
          transform: 'rotate(40.38deg)',
          position: 'absolute',
          bottom: '8.75rem',
          right: '-10rem',
        }}
      />
    </div>
  );
};

export default Home;
