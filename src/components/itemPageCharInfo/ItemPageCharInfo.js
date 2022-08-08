import React from 'react';
import './ItemPageCharInfo.scss';
import ImageBox from '../imageBox/imageBox';
import PropTypes from 'prop-types';
import Banner from '../banner/banner';
import {Link} from 'react-router-dom';

export default function ItemPageCharInfo({thumbnail, title, description}) {
    return (
        <>
            <Banner />
            <section className={'itemPageCharInfo'}>
                <div className="itemPageCharImage">
                    <ImageBox imgPath={thumbnail} width={'295px'} height={'295px'} alt={'Character image'} />
                </div>
                <div className="charInfo">
                    <h2>
                        {title}
                    </h2>
                    <p>
                        {description.length === 0 ? 'There is no description': description}
                    </p>
                </div>
                <div className="itemPageLink">
                    <Link to={'/'}>
                        <h3>
                            Back to all
                        </h3>
                    </Link>
                </div>
            </section>
        </>
    );
}

ItemPageCharInfo.propTypes = {
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
};