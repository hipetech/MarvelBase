import React from 'react';
import RandomHeroSection from '../components/randomHeroSection/randomHeroSection';
import CharacterBase from '../components/characterBase/characterBase';
import ErrorBoundary from '../components/errorBoundary/errorBoundary';

export default function CharacterPage() {

    return (
        <>
            <ErrorBoundary>
                <RandomHeroSection />
            </ErrorBoundary>
            <ErrorBoundary>
                <CharacterBase />
            </ErrorBoundary>
        </>
    );
}