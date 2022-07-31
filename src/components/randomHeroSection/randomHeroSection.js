import './randomHeroSection.scss';
import '../../styles/style.scss';
import React, {useEffect, useState} from 'react';
import mjolnir from '../../resources/mjolnir.png';
import shield from '../../resources/shield.png';
import ImageBox from '../imageBox/imageBox';
import MarvelBtn from '../marvelBtn/marvelBtn';
import {MarvelService} from '../../services/MarvelService';

export default function RandomHeroSection() {
    const [state, setState] = useState({
        char: {
            name: '',
            description: '',
            thumbnail: '',
            homepage: '',
            wiki: ''
        }
    });

    const btnLink = (link) => {
        window.location.href = link;
    };

    const marvelService = new MarvelService();

    const onCharLoaded = (char) => {
        char.description = descriptionCheck(char.description);
        setState(char);
    };

    const descriptionCheck = (description) => {
        if (description.length === 0) return 'No character description';
        return description.slice(0, 210);
    };

    const updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        marvelService
            .getCharacterById(id)
            .then(onCharLoaded);
    };

    useEffect(updateChar, []);

    return (
        <>
            <section className="randomHeroSection">
                <div className="heroSection">
                    <ImageBox imgPath={state.thumbnail} alt={'Hero Img'} width={'180px'} height={'180px'} />
                    <div className="heroDescription">
                        <h2>
                            {state.name}
                        </h2>
                        <p>
                            {state.description}
                        </p>
                        <div className="btnBox">
                            <MarvelBtn title={'HOMEPAGE'} color={'r'} onClick={() => {
                                btnLink(state.homepage);
                            }}/>
                            <MarvelBtn title={'WIKI'} color={'g'} href={state.wiki} onClick={() => {
                                btnLink(state.wiki);
                            }}/>
                        </div>
                    </div>
                </div>
                <div className="tryItSection">
                    <div className={'tryItSectionTittle'}>
                        <h2>
                            Random character for today!
                        </h2>
                        <h2>
                            Do you want to get to know him better?
                        </h2>
                    </div>
                    <h2>
                        Or choose another one
                    </h2>
                    <MarvelBtn title={'TRY IT'} color={'r'} onClick={updateChar}/>
                    <img className={'mjolnir'} src={mjolnir} alt="hummer"/>
                    <img className={'shield'} src={shield} alt="shield"/>
                </div>
            </section>
        </>
    );
}

