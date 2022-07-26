import './randomHeroSection.scss';
import '../../styles/style.scss';
import React, {useEffect, useState} from 'react';
import mjolnir from '../../resources/mjolnir.png';
import shield from '../../resources/shield.png';
import ImageBox from '../imageBox/imageBox';
import MarvelBtn from '../marvelBtn/marvelBtn';
import {MarvelService} from '../../services/MarvelService';
import Spinner from '../spinner/spinner';
import {Link} from 'react-router-dom';


const btnLink = (link) => {
    window.location.href = link;
};
export {btnLink};

export default function RandomHeroSection() {
    const [state, setState] = useState({
        name: '',
        description: '',
        thumbnail: '',
        homepage: '',
        wiki: ''
    });
    const [isLoad, setIsLoad] = useState(false);
    const [error, setError] = useState(false);

    const descriptionCheck = (description) => {
        if (description.length === 0) return 'No character description';
        return description.slice(0, 210);
    };

    const onCharLoaded = (char) => {
        char.description = descriptionCheck(char.description);
        setState(char);
        setIsLoad(true);
    };

    const onError = () => {
        setIsLoad(true);
        setError(true);
    };

    const updateChar = () => {
        setIsLoad(false);
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        new MarvelService()
            .getCharacterById(id)
            .then(onCharLoaded)
            .catch(onError);
    };

    const CharInfo = () => (
        <>
            <ImageBox imgPath={state.thumbnail} alt={'Hero Img'} width={'180px'} height={'180px'}/>
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
                    <Link to={`/character/${state.name.split(' ').join('')}`} state={{
                        imgPath: state.thumbnail,
                        title: state.name,
                        description: state.description
                    }}>
                        <MarvelBtn title={'CHARACTER PAGE'} />
                    </Link>
                </div>
            </div>
        </>
    );

    const RandomCharError = () => (
        <>
            <section className="error">
                <h2>
                    Sorry, we get some troubles, try to reload your page or try it later :(
                </h2>
            </section>
        </>
    );

    const renderContent = () => {
        if (error) return <RandomCharError />;
        else if (!isLoad) return <Spinner />;
        else return <CharInfo />;
    };

    useEffect(updateChar, []);

    return (
        <>
            <section className="randomHeroSection">
                <div className="heroSection">
                    {
                        renderContent()
                    }
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
                    <MarvelBtn title={'TRY IT'} color={'r'} onClick={() => {
                        setError(false);
                        updateChar();
                    }}/>
                    <img className={'mjolnir'} src={mjolnir} alt="hummer"/>
                    <img className={'shield'} src={shield} alt="shield"/>
                </div>
            </section>
        </>
    );
}





