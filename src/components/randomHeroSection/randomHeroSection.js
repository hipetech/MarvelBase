import './randomHeroSection.scss';
import React from 'react';
import heroImg from '../../resources/heroImg.png';
import mjolnir from '../../resources/mjolnir.png';
import shield from '../../resources/shield.png';

export default function RandomHeroSection() {
    return (
        <>
            <section className="randomHeroSection">
                <div className="heroSection">
                    <div className="imgBox">
                        <img src={heroImg} alt="Random character"/>
                    </div>
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
                            <button className={'btn red'}>HOMEPAGE</button>
                            <button className={'btn grey'}>WIKI</button>
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
                    <button className={'btn red'}>TRY IT</button>
                    <img className={'mjolnir'} src={mjolnir} alt="hummer"/>
                    <img className={'shield'} src={shield} alt="shield"/>
                </div>
            </section>
        </>
    );
}

