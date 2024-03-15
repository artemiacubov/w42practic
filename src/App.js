import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/Layout';
import Home from './Header/Home/Home';

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
