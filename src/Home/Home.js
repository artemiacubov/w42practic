import React, { useState, useEffect } from 'react';
import './Home.css';
import icon3 from './assets/icon3.jpg';
import icon2 from './assets/icon2.jpg';
import icon1 from './assets/icon1.jpg';

const Home = () => {
  const names = ["Андрей", "Игорь", "Вова", "Влад", "Антон"];
  const surnames = ["Андреевич", "Игоревич", "Вовавич", "Владиславович", "Антонович"];
  const icons = [icon3, icon2, icon1];

  const getRandomWord = () => {
    const randomIndexName = Math.floor(Math.random() * names.length);
    const randomIndexSurname = Math.floor(Math.random() * surnames.length);
    return [names[randomIndexName], surnames[randomIndexSurname]];
  };

  const getRandomIcon = () => {
    return icons[Math.floor(Math.random() * icons.length)];
  };

  const [currentWord, setCurrentWord] = useState(getRandomWord());
  const [icon, setIcon] = useState(getRandomIcon());

  useEffect(() => {
    setCurrentWord(getRandomWord());
    setIcon(getRandomIcon());
  }, []);

  return (
    <>
    {/* не забыть сделать так чтобы app был основным хедером а все остальеные компоненты открывались через роутер */}
      <header className="header">
        <img src={icon} alt="icon" className="header-img" />
        <div className="header-div">
          <p className="header-p">{currentWord[0]}</p>
          <p className="header-p">{currentWord[1]}</p>
        </div>
      </header>
      <div className="fullscreen-div">
        
      </div>
    </>
  );
};

export default Home;
