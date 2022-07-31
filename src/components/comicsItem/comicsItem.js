import React from 'react';
import './comicsItem.scss';
import PropTypes from 'prop-types';
import ImageBox from '../imageBox/imageBox';

export default function ComicsItem({imgPath, title, price}) {
    return (
        <>
            <section className="comicsItem">
                <ImageBox imgPath={imgPath} alt={'Comics image'} width={'225px'} height={'346px'} />
                <h4>
                    {title}
                </h4>
                <p>
                    {price}
                </p>
            </section>

        </>
    );
}

ComicsItem.propTypes = {
    imgPath: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.string
};

