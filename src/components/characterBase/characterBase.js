import React, {useEffect, useState} from 'react';
import './chatacterBase.scss';
import CharacterCatalogue from '../characterCatalogue/characterCatalogue';
import CharacterCatalogueInfo from '../characterCatalogueInfo/characterCatalogueInfo';
import {MarvelService} from '../../services/MarvelService';

export default function CharacterBase() {
    const [activeChar, setActiveChar] = useState({
        name: '',
        description: '',
        thumbnail: '',
        homepage: '',
        wiki: '',
        comicsList: []
    });
    const [charList, setCharList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isIncreaseCharList, setIsIncreaseCharList] = useState(false);

    const marvelService = new MarvelService();

    const [charOffset, setCharOffset] = useState(marvelService.baseCharOffset + 9);

    const onRequest = (onLoad, offset = marvelService.baseCharOffset) => {
        marvelService
            .getAllCharacters(offset)
            .then(onLoad)
            .catch(() => setIsError(true));
    };

    const renderCharList = (res) => {
        setCharList(res);
        setIsLoading(true);
    };

    const updateCharList = () => {
        onRequest(renderCharList);
    };

    const renderIncreasedCharList = (res) => {
        setCharList([...charList, ...res]);
        setIsIncreaseCharList(false);
    };

    const increaseCharList = () => {
        onRequest(renderIncreasedCharList, charOffset);
        setCharOffset(charOffset + 9);
    };

    useEffect(updateCharList, []);

    return (
        <>
            <section className={'characterBase'}>
                <CharacterCatalogue
                    charList={charList}
                    setActiveChar={setActiveChar}
                    isLoading={isLoading}
                    isError={isError}
                    isIncreaseCharList={isIncreaseCharList}
                    setIsIncreaseCharList={setIsIncreaseCharList}
                    increaseCharList={increaseCharList}
                />
                <CharacterCatalogueInfo
                    imgPath={activeChar.thumbnail}
                    title={activeChar.name}
                    description={activeChar.description}
                    comicsList={activeChar.comicsList}
                    wiki={activeChar.wiki}
                    homepage={activeChar.homepage}
                />
            </section>
        </>
    );
}