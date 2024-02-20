import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login/Login';
import Home from './Header/Home/Home';
import Profile from './Header/Profile/Profile';
import Header from './Header/Layout';

function App() {
    return (
        <Router>
        <Routes>
            <Route path='/*' element={<Header />} />
        </Routes>
    </Router>
    );
}

export default App;
