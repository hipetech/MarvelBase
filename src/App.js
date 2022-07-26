import React from 'react';
import './App.scss';
import NavigationBar from './components/navigationBar/navigationBar';
import RandomHeroSection from './components/randomHeroSection/randomHeroSection';
import CharacterBase from './components/characterBase/characterBase';

function App() {
    return (
        <>
            <div className="contentBox">
                <NavigationBar />
                <RandomHeroSection />
                <CharacterBase />
            </div>
        </>
    );
}

export default App;
