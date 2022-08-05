import React, {useState} from 'react';
import './characterCatalogue.scss';
import './../../styles/style.scss';
import CharacterCard from '../characterCard/characterCard';
import * as PropTypes from 'prop-types';
import MarvelBtn from '../marvelBtn/marvelBtn';
import errorImg from '../../resources/charCatalogueErrorImg.png';


export default function CharacterCatalogue({
    charList,
    setActiveChar,
    isLoading,
    isError,
    isIncreaseCharList,
    setIsIncreaseCharList,
    increaseCharList
}) {

    const [selectedCardIndex, setSelectedCardIndex] = useState(null);

    const selectChar = (el) => {
        setActiveChar({
            name: el.name,
            description: el.description,
            thumbnail: el.thumbnail,
            homepage: el.homepage,
            wiki: el.wiki,
            comicsList: el.comicsList
        });
    };

    const CharacterCatalogue = () => {
        return (
            <>
                <section className="characterCatalogue">
                    {
                        charList.map((el, index) => {
                            return <CharacterCard
                                imgPath={el.thumbnail}
                                title={el.name}
                                key={index}
                                selectedCardIndex={selectedCardIndex}
                                index={index}
                                onClick={() => {
                                    selectChar(el);
                                    setSelectedCardIndex(index);
                                }}
                                tabIndex={index + 1}
                            />;
                        })
                    }
                    {
                        isIncreaseCharList ? <LoadingPlaceholder/> : null
                    }
                </section>
                <div className="loadMoreBtnBox">
                    <MarvelBtn title={'LOAD MORE'} color={'r'} onClick={() => {
                        setIsIncreaseCharList(true);
                        increaseCharList();
                    }}/>
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

    const LoadingPlaceholder = () => {
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

    const CharacterCatalogueError = () => {
        return (
            <>
                <section className="characterCatalogueError">
                    <img src={errorImg} alt="RandomCharError image"/>
                    <h2>
                        Error:( we get some troubles!
                    </h2>
                </section>
            </>
        );
    };

    const renderCatalogue = () => {
        if (isLoading) return <CharacterCatalogue/>;
        else if (isError) return <CharacterCatalogueError/>;
        return <LoadingPlaceholder/>;
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
    isError: PropTypes.bool,
    isIncreaseCharList: PropTypes.bool,
    setIsIncreaseCharList: PropTypes.func,
    increaseCharList: PropTypes.func
};