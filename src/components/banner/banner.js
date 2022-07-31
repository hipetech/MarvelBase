import React from 'react';
import Avengers from '../../resources/Avengers.png';
import AvengersLogo from '../../resources/Avengers logo.png';
import './banner.scss';

export default function Banner() {
    return (
        <>
            <section className="banner">
                <img src={Avengers} alt="Avengers" className={'bannerImg avengersImg'}/>
                <h2>
                    New comics every week!
                    Stay tuned!
                </h2>
                <img src={AvengersLogo} alt={'Avengers logo'} className={'bannerImg'}/>
            </section>
        </>
    );
}