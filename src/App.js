import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login/Login';
import Home from './Header/Home/Home';
import Profile from './Header/Profile/Profile';
import Header from './Header/Header';

function App() {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<Header />}> {/* Основной маршрут для хедера */}
                <Route path="/" element={<Login />} /> {/* Путь для страницы Login */}
                <Route path="/home" element={<Home />} /> {/* Путь для страницы Home */}
                <Route path="/profile" element={<Profile />} /> {/* Путь для страницы Profile */}
            </Route>
        </Routes>
    </Router>
    );
}

export default App;
