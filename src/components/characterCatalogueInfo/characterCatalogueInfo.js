import React from 'react';
import './chatacterCatalogueInfo.scss';
import './../../styles/style.scss';
import * as PropTypes from 'prop-types';
import ImageBox from '../imageBox/imageBox';
import MarvelBtn from '../marvelBtn/marvelBtn';
import back from '../../resources/bg asset.png';
import {btnLink} from '../randomHeroSection/randomHeroSection';

export default function CharacterCatalogueInfo(props) {
    let {imgPath, title, description, comicsList, wiki, homepage} = props;

    const charInfo = () => {
        return (
            <>
                <div className="characterCatalogueHeading">
                    <ImageBox imgPath={imgPath} alt={'Character Image'} width={'150px'} height={'150px'} />
                    <div className="titleAndButton">
                        <h2>
                            {title.toUpperCase()}
                        </h2>
                        <div className="characterCatalogueInfoBtnBox">
                            <MarvelBtn title={'HOMEPAGE'} color={'r'} onClick={() => btnLink(homepage)}/>
                            <MarvelBtn title={'WIKI'} color={'g'} onClick={() => btnLink(wiki)}/>
                        </div>
                    </div>
                </div>
                <p>
                    {description.length === 0 ? 'There is no character description' : description}
                </p>
                <h3>
                    {comicsList.length === 0 ? '' : 'Comics:'}
                </h3>
                <div className="comicsList">
                    {
                        comicsList.map((elem, index) => {
                            return (
                                <p key={index}>
                                    {elem.name}
                                </p>
                            );
                        })
                    }
                </div>
            </>
        );
    };

    const infoPlaceholder = () => {
        return (
            <>
                <section className="infoPlaceholder">
                    <h2>
                        Please select a character to see information
                    </h2>
                    <div className={'infoPlaceholderItemsHeader'}>
                        <div className="icon"></div>
                        <div className="smallLine"></div>
                    </div>
                    <div className="infoPlaceholderBody">
                        <div className="bigLine"></div>
                        <div className="bigLine"></div>
                        <div className="bigLine"></div>
                    </div>
                </section>

            </>
        );
    };

    const renderContent = () => {
        if (imgPath === '' && title === '') return infoPlaceholder();
        return charInfo();
    };


    return (
        <>
            <section className="characterCatalogueInfo">
                {
                    renderContent()
                }
            </section>
            <div className="back">
                <ImageBox imgPath={back} width={'467px'} height={'372px'} />
            </div>
        </>
    );
}

CharacterCatalogueInfo.propTypes = {
    imgPath: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    comicsList: PropTypes.array,
    wiki: PropTypes.string,
    homepage: PropTypes.string
};