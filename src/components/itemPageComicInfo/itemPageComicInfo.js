import React from 'react';
import './itemPageComicInfo.scss';
import PropTypes from 'prop-types';
import Banner from '../banner/banner';
import ImageBox from '../imageBox/imageBox';
import {Link} from 'react-router-dom';

export default function ItemPageComicInfo({thumbnail, title, description, price, language, pageCount}) {
    return (
        <>
            <Banner />
            <section className="itemPageComicInfo">
                <div className="itemPageComicImage">
                    <ImageBox imgPath={thumbnail} width={'293px'} height={'450px'} alt={'Comic Image'} />
                </div>
                <div className="comicInfo">
                    <h2>
                        {title}
                    </h2>
                    <p className={'itemPageComicInfoDescription'}>
                        {description.length === 0 ? 'There is no description': description.replaceAll('<br>', '')}
                    </p>
                    <p>
                        {pageCount === 0 ? 'There is no information about page count': `${pageCount} pages`}
                    </p>
                    <p>
                        Language: {language}
                    </p>
                    <h3>
                        {price}$
                    </h3>
                </div>
                <div className="itemPageLink">
                    <Link to={'/comics'}>
                        <h3>
                            Back to all
                        </h3>
                    </Link>
                </div>
            </section>
        </>
    );
}

ItemPageComicInfo.propTypes = {
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    language: PropTypes.string,
    pageCount: PropTypes.number
};