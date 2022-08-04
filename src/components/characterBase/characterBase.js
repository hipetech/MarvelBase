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

    const renderCharList = (res) => {
        setCharList(res);
        setIsLoading(true);
    };

    const onRequest = (onLoad) => {
        marvelService
            .getAllCharacters()
            .then(onLoad)
            .catch(() => setIsError(true));
    };

    const updateCharList = () => {
        onRequest((res) => renderCharList(res));
    };

    const renderIncreasedCharList = (res) => {
        setCharList([...charList, ...res]);
        setIsIncreaseCharList(false);
    };

    const increaseCharList = () => {
        marvelService.baseOffset += 9;
        onRequest(renderIncreasedCharList);
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