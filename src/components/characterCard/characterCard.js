import React from 'react';
import './characterCard.scss';
import * as PropTypes from 'prop-types';

export default function CharacterCard({imgPath, title}) {
    return (
        <>
            <section className={'characterCard'}>
                <div className={'characterCardImgBox'}>
                    <img src={imgPath} alt="Character image"/>
                </div>
                <h2>
                    {title.toUpperCase()}
                </h2>
            </section>
        </>
    );
}

CharacterCard.propTypes = {
    imgPath: PropTypes.string,
    title: PropTypes.string
};

