import React, {useEffect, useState} from 'react';
import './marvelBtn.scss';
import './../../styles/variables.scss';
import PropTypes from 'prop-types';

export default function MarvelBtn({title, color = 'r'}) {

    const [btnColor, setColor] = useState('');

    const colorCheck = () => {
        if (color === 'g') {
            setColor('#5C5C5C');
        } else if (color === 'r') {
            setColor('#9F0013');
        }
    };

    useEffect(() => {
        colorCheck();
    });

    const style = {
        borderImage: `linear-gradient(-45deg, transparent 10%, ${btnColor} 10%, ${btnColor} 90%, transparent 90%) 18 fill / 15px`
    };

    return (
        <>
            <button style={style} className={'btn'}>
                {title}
            </button>
        </>
    );
}

MarvelBtn.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string
};