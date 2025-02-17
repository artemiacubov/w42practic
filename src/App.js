import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Layout/Components/Home';

function App() {
    return (
        <Router>
        <Routes>
            <Route path='/*' element={<Layout />} />
        </Routes>
    </Router>
    );
}

export default App;
