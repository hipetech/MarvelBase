import React, {useEffect, useState} from 'react';
import './characterCatalogue.scss';
import CharacterCard from '../characterCard/characterCard';

export default function CharacterCatalogue() {
    const [characters] = useState([
        {imgPath: './loki.png', title: 'loki'},
        {imgPath: './loki.png', title: 'loki'},
        {imgPath: './loki.png', title: 'loki'},
        {imgPath: './loki.png', title: 'loki'},
        {imgPath: './loki.png', title: 'loki'},
        {imgPath: './loki.png', title: 'loki'},
        {imgPath: './loki.png', title: 'loki'},
        {imgPath: './loki.png', title: 'loki'},
        {imgPath: './loki.png', title: 'loki'}
    ]);

    const setActive = (id) => {
        const elem = document.querySelector('.characterCatalogue').children;
        elem[id].classList.add('active');
    };

    useEffect(() => {
        setActive(1);
    });

    return (
        <>
            <section className="characterCatalogue">
                {characters.map((el, index) => {
                    return <CharacterCard imgPath={el.imgPath} title={el.title} key={index}/>;
                })}
            </section>
        </>
    );
}