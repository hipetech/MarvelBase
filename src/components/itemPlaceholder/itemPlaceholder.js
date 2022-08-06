import React from 'react';
import PropTypes from 'prop-types';
import './itemPlaceholder.scss';

export default function ItemPlaceholder({cardWidth, cardHeight, imgWidth, imgHeight}) {

    const imgStyle = {
        width: imgWidth,
        height: imgHeight
    };

    const cardStyle = {
        width: cardWidth,
        height: cardHeight
    };

    return (
        <div className="loadingPlaceholderCard" style={cardStyle}>
            <div className="loadingPlaceholderImage" style={imgStyle}></div>
            <div className="loadingPlaceholderLine"></div>
        </div>
    );
}

ItemPlaceholder.propTypes = {
    imgWidth: PropTypes.string,
    imgHeight: PropTypes.string,
    cardWidth: PropTypes.string,
    cardHeight: PropTypes.string
};