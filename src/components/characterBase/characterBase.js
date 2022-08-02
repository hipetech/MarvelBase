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

    const renderCharList = (res) => {
        setCharList(res);
        setIsLoading(true);
    };


    const updateCharList = () => {
        new MarvelService()
            .getAllCharacters()
            .then(renderCharList)
            .catch(() => setIsError(true));
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