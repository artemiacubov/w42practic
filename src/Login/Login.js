import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import imglogo from './assets/reacticon.png';
import './Login.css'

const Login = () => {
    const [myLogin, setMyLogin] = useState('');
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(false);

    function handleLoginChange(event) {
        setMyLogin(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleExport(event) {
        event.preventDefault();


        if (myLogin === 'Sigma' && password === 'Criper') {
            setAuthenticated(true);
        } else {
            console.log('Неверный логин или пароль');
        }
    }

    if (authenticated) {
        return <Navigate to="/Home" />;
    }

    return (
        <>
            <header className="header">
                <img src={imglogo} alt="123" className="header-img" />
                <div className="header-div">
                    <p className="header-p">ReactApp</p>
                </div>
            </header>
            <div className="main-div">
                <div>
                    <form onSubmit={handleExport}>
                        <p className="field">
                            <input
                                type="text"
                                name="login"
                                placeholder="Логин"
                                value={myLogin}
                                onChange={handleLoginChange}
                            />
                        </p>
                        <p className="field">
                            <input
                                type="password"
                                name="password"
                                placeholder="Пароль"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </p>
                        <p className="submit">
                            <button type="submit" name="submit">
                                Войти
                            </button>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
