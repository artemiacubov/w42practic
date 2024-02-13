import React from 'react';
import imglogo from './assets/reacticon.png';
import './Home.css'

const Home = () => {
  return (
    <>
    <header className="header">
        <img src={imglogo} alt="123" className="header-img" />
        <div className="header-div">
            <p className="header-p">ReactApp</p>
        </div>
    </header>
    <div className="fullscreen-div">
        2
    </div>
</>
  );
};

export default Home;