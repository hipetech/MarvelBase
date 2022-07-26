import React from 'react';
import './chatacterBase.scss';
import CharacterCatalogue from '../characterCatalogue/characterCatalogue';

export default function CharacterBase() {
    return (
        <>
            <section className={'characterBase'}>
                <CharacterCatalogue />
            </section>
        </>
    );
}