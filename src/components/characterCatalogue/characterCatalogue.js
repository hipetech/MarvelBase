import React from 'react';
import './characterCatalogue.scss';
import './../../styles/style.scss';
import CharacterCard from '../characterCard/characterCard';
import * as PropTypes from 'prop-types';
import MarvelBtn from '../marvelBtn/marvelBtn';
import errorImg from '../../resources/charCatalogueErrorImg.png';

export default function CharacterCatalogue({charList, setActiveChar, isLoading, isError}) {

    const setActive = (e) => {
        document.querySelectorAll('.characterCard')
            .forEach(el => el.classList.remove('activeCard'));
        e.currentTarget.classList.add('activeCard');
    };

    const chooseChar = (e, el) => {
        setActive(e);
        setActiveChar({
            name: el.name,
            description: el.description,
            thumbnail: el.thumbnail,
            homepage: el.homepage,
            wiki: el.wiki,
            comicsList: el.comicsList
        });
    };

    const characterCatalogue = () => {
        return (
            <>
                <section className="characterCatalogue">
                    {
                        charList.map((el, index) => {
                            return <CharacterCard imgPath={el.thumbnail} title={el.name} key={index}
                                onClick={(e) => chooseChar(e, el)}/>;
                        })
                    }
                </section>
                <div className="loadMoreBtnBox">
                    <MarvelBtn title={'LOAD MORE'} color={'r'}/>
                </div>
            </>
        );
    };

    const renderPlaceholders = () => {
        let arr = [];
        
        for (let i = 0; i < 9; i++) {
            arr.push(
                <div className="loadingPlaceholderCard" key={i}>
                    <div className="loadingPlaceholderImage"></div>
                    <div className="loadingPlaceholderLine"></div>
                </div>
            );
        }

        return arr;
    };

    const loadingPlaceholder = () => {
        return (
            <>
                <section className="characterCatalogue">
                    {
                        renderPlaceholders()
                    }
                </section>
            </>
        );
    };

    const characterCatalogueError = () => {
        return (
            <>
                <section className="characterCatalogueError">
                    <img src={errorImg} alt="Error image"/>
                    <h2>
                        Error :(, we get some troubles!
                    </h2>
                </section>
            </>
        );
    };

    const renderCatalogue = () => {
        if (isLoading) return characterCatalogue();
        else if (isError) return characterCatalogueError();
        return loadingPlaceholder();
    };

    return (
        <>
            <section className="catalogue">
                {
                    renderCatalogue()
                }
            </section>
        </>
    );
}

CharacterCatalogue.propTypes = {
    charList: PropTypes.array,
    setActiveChar: PropTypes.func,
    isLoading: PropTypes.bool,
    isError: PropTypes.bool
};