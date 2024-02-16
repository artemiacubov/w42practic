import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login/Login';
import Home from './Home/Home';
import Profile from './Profile/Profile';

function App() {
    return (
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />}/>
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </Router>
    );
}

export default App;
