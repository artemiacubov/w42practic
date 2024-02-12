import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import Home from './Home/Home';

function App() {
    const [authenticated, setAuthenticated] = useState(false);

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login setAuthenticated={setAuthenticated} />} />
                <Route path="/home" element={<Home />} isAuthenticated={authenticated} />
            </Routes>
        </Router>
    );
}

export default App;
