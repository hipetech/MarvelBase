import React from 'react';
import './characterCard.scss';
import * as PropTypes from 'prop-types';
import ImageBox from '../imageBox/imageBox';

export default function CharacterCard({imgPath, title, onClick}) {

    return (
        <section className={'characterCard'} onClick={onClick}>
            <ImageBox imgPath={imgPath}  width={'200px'} height={'200px'} alt={'Char img'} />
            <div className="name">
                <h2>
                    {title.toUpperCase()}
                </h2>
            </div>
        </section>
    );
}

CharacterCard.propTypes = {
    imgPath: PropTypes.string,
    title: PropTypes.string,
    onClick: PropTypes.func
};

