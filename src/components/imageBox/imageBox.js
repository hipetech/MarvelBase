import React from 'react';
import PropTypes from 'prop-types';
import './imageBox.scss';

export default function ImageBox({imgPath, alt, width = 'auto', height = 'auto'}) {
    const style = {
        width: width,
        height: height,
    };

    const placeholderUrl = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';


    const imgCheck = () => {
        if (imgPath === placeholderUrl) return {objectFit: 'fill'};
        return {objectFit: 'cover'};
    };


    return (
        <>
            <div className={'imgBox'} style={style}>
                <img src={imgPath} alt={alt} style={imgCheck()}/>
            </div>
        </>
    );
}


ImageBox.propTypes = {
    imgPath: PropTypes.string,
    alt: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
};