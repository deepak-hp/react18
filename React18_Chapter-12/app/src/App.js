import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import store from './utils/store';

const App = () => {
    const [user, setUser] = useState({
        name: "Deepak HP",
        email: "deepak@gmail.com"
    })
    return (
        <Provider store={store}>
            <UserContext.Provider value={{ user: {}, setUser: setUser }}>
                <div className='app'>
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
            </UserContext.Provider>
        </Provider>
    );
};

export default App;
