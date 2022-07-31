import React from 'react';
import './characterCard.scss';
import * as PropTypes from 'prop-types';
import ImageBox from '../imageBox/imageBox';

export default function CharacterCard({imgPath, title}) {
    return (
        <>
            <section className={'characterCard'}>
                <ImageBox imgPath={imgPath} alt={''} />
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

