import React from 'react';
import './App.scss';
import NavigationBar from './components/navigationBar/navigationBar';
import RandomHeroSection from './components/randomHeroSection/randomHeroSection';

function App() {
    return (
        <>
            <div className="contentBox">
                <NavigationBar />
                <RandomHeroSection />
            </div>
        </>
    );
}

export default App;
