import React, {useEffect} from 'react';
import './characterCatalogue.scss';
import './../../styles/style.scss';
import CharacterCard from '../characterCard/characterCard';
import * as PropTypes from 'prop-types';
import MarvelBtn from '../marvelBtn/marvelBtn';

export default function CharacterCatalogue(props) {
    let {characters} = props;


    const setActive = (id) => {
        const elem = document.querySelector('.characterCatalogue').children;
        elem[id].classList.add('activeCard');
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
                <div className="characterCatalogueBtnBox">
                    <MarvelBtn title={'LOAD MORE'} color={'r'} />
                </div>
            </section>
        </>
    );
}

CharacterCatalogue.propTypes = {characters: PropTypes.array};