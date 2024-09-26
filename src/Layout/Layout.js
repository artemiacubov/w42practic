import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import * as icons from './icons';
import Offers from "./Components/Offers";

const Layout = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {

                setItems(data);
            });
    }, []);
  return (
    <>
        <div style={{ height: '100vh' }}>
            <header>
                <div>
                    <p><Link to="/offers">HomeShop</Link></p>
                </div>
                <div>
                    <img src={icons.cartico} alt="Корзина"/>
                    <img src={icons.homeico} alt="Домой"/>
                </div>
            </header>
            <div className="app">

              <div className="pathes">
              <div>
                1
              </div>
              <div></div>
              <div></div>
            </div>
                  <div>
                    <Routes>
                      <Route path="/offers" element={<Offers />} />
                      <Route path="/home" element={<Home />} />
                      <Route path='/*' element={<Offers />} />
                    </Routes>
                  </div>

                  <div>
                    123231
                  </div>

            </div>
        </div>
    </>
  );
};

export default Layout;

