import './randomHeroSection.scss';
import '../../styles/style.scss';
import React from 'react';
import heroImg from '../../resources/heroImg.png';
import mjolnir from '../../resources/mjolnir.png';
import shield from '../../resources/shield.png';
import ImageBox from '../imageBox/imageBox';
import MarvelBtn from '../marvelBtn/marvelBtn';

export default function RandomHeroSection() {
    return (
        <>
            <section className="randomHeroSection">
                <div className="heroSection">
                    <ImageBox imgPath={heroImg} alt={'Hero Img'} width={'180px'} height={'180px'} />
                    <div className="heroDescription">
                        <h2>
                            THOR
                        </h2>
                        <p>
                            As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made,
                            the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish
                            imbecile, he`s quite smart and compassionate...
                        </p>
                        <div className="btnBox">
                            <MarvelBtn title={'HOMEPAGE'} color={'r'}/>
                            <MarvelBtn title={'WIKI'} color={'g'}/>
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
                    <MarvelBtn title={'TRY IT'} color={'r'} />
                    <img className={'mjolnir'} src={mjolnir} alt="hummer"/>
                    <img className={'shield'} src={shield} alt="shield"/>
                </div>
            </section>
        </>
    );
}

