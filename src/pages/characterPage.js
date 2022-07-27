import React from 'react';
import RandomHeroSection from '../components/randomHeroSection/randomHeroSection';
import CharacterBase from '../components/characterBase/characterBase';

export default function CharacterPage() {
    return (
        <>
            <RandomHeroSection />
            <CharacterBase />
        </>
    );
}