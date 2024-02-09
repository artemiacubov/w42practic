import React, { useState } from 'react';
import './App.css';
import img1 from './assets/React-icon.svg.png';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Login from './Login/Login';

function HomePage() {
  const [myLogin, setMyLogin] = useState('');

  function handleLoginChange(event) {
    setMyLogin(event.target.value);
  }

  function handleExport() {
    console.log(myLogin);
  }

  return (
    <>
      <header className="header">
        <img src={img1} alt="123" className="header-img" />
        <div className="header-div">
          <p className="header-p">ReactApp</p>
        </div>
      </header>
      <div className="main-div">
        <div>
          <form>
            <p className="field">
              <input
                type="text"
                name="login"
                placeholder="Логин"
                onChange={handleLoginChange}
              />
            </p>
            <p className="field">
              <input type="password" name="password" placeholder="Пароль" />
            </p>
            <p className="submit">
              <button type="button" name="submit" onClick={handleExport}>
                Войти
              </button>
            </p>
          </form>
          <Link to="/login">Войти</Link>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
