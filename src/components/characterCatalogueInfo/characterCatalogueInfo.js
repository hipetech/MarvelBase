import React from 'react';
import './chatacterCatalogueInfo.scss';
import './../../styles/style.scss';
import * as PropTypes from 'prop-types';
import ImageBox from '../imageBox/imageBox';
import MarvelBtn from '../marvelBtn/marvelBtn';

export default function CharacterCatalogueInfo(props) {
    // eslint-disable-next-line no-unused-vars
    let {imgPath, title, description, comicsList} = props;
    return (
        <>
            <section className="characterCatalogueInfo">
                <div className="characterCatalogueHeading">
                    <ImageBox imgPath={imgPath} alt={'Character Image'} width={'150px'} height={'150px'} />
                    <div className="titleAndButton">
                        <h2>
                            {title.toUpperCase()}
                        </h2>
                        <div className="characterCatalogueInfoBtnBox">
                            <MarvelBtn title={'HOMEPAGE'} color={'r'}/>
                            <MarvelBtn title={'WIKI'} color={'g'} />
                        </div>
                    </div>
                </div>
                <p>
                    {description}
                </p>
                <h3>
                    Comics:
                </h3>
                <div className="comicsList">
                    {
                        comicsList.map((elem, index) => {
                            return (
                                <p key={index}>
                                    {elem}
                                </p>
                            );
                        })
                    }
                </div>
            </section>
        </>
    );
}

CharacterCatalogueInfo.propTypes = {
    imgPath: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    comicsList: PropTypes.array
};