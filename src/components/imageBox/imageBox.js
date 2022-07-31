import React from 'react';
import PropTypes from 'prop-types';
import './imageBox.scss';

export default function ImageBox({imgPath, alt, width = 'auto', height = 'auto'}) {
    const style = {
        width: width,
        height: height
    };

    return (
        <>
            <div className={'imgBox'} style={style}>
                <img src={imgPath} alt={alt}/>
            </div>
        </>
    );
}


ImageBox.propTypes = {
    imgPath: PropTypes.string,
    alt: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
};