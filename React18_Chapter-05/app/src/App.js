import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Body from './components/Body';

const App = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
            <Footer />
        </div>
    );
};

export default App;
