import React, {useEffect, useState} from 'react';
import ComicsItem from '../comicsItem/comicsItem';
import './comicsCatalgue.scss';
import MarvelBtn from '../marvelBtn/marvelBtn';
import {MarvelService} from '../../services/MarvelService';
import ItemPlaceholder from '../itemPlaceholder/itemPlaceholder';
import ImageBox from '../imageBox/imageBox';
import ErrorImg from '../../resources/comicsCatalogueErrorImg.png';
import {Link} from 'react-router-dom';

export default function ComicsCatalogue() {
    const [comicsItems, setComicsItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isIncrease, setIsIncrease] = useState(false);

    const marvelService = new MarvelService();

    const [comicOffset, setComicOffset] = useState(marvelService.baseComicOffset + 8);

    const onRequest = (onLoad, offset) => {
        marvelService
            .getAllComics(offset)
            .then(onLoad)
            .catch(() => setIsError(true));
    };

    const getComicsList = (res) => {
        setComicsItems(res);
        setIsLoading(true);
    };

    const updateComicsList = () => {
        onRequest(getComicsList);
    };
    
    const ComicsCatalogue = () => (
        <>
            <section className="comicsCatalogue">
                {
                    comicsItems.map((el, index) => {
                        return (
                            <Link to={`/comic/${el.title.split(' ').join('')}`} 
                                key={index} 
                                style={{width: '225px'}}
                                state={{
                                    thumbnail: el.thumbnail,
                                    title: el.title,
                                    description: el.description,
                                    price: el.price,
                                    language: el.language,
                                    pageCount: el.pageCount
                                }}>
                                <ComicsItem imgPath={el.thumbnail} title={el.title} price={el.price} />
                            </Link>
                        );
                    })
                }
                {
                    isIncrease ? <Placeholders />: null
                }
            </section>
            <div className="loadMoreBtnBox btnMargin">
                <MarvelBtn title={'LOAD MORE'} color={'r'} onClick={() => {
                    setIsIncrease(true);
                    renderIncreasedComicItems();
                }}/>
            </div>

        </>
    );

    const Placeholders = () => {
        let arr = [];

        for (let i = 0; i < 8; i++) {
            arr = [...arr, <ItemPlaceholder
                key={i}
                cardWidth={'225px'}
                cardHeight={'415px'}
                imgWidth={'205px'}
                imgHeight={'346px'}
            />];
        }

        return <section className="comicsCatalogue">{arr}</section>;
    };

    const Error = () => (
        <section className={'comicsCatalogueError'}>
            <ImageBox imgPath={ErrorImg} alt={'Error image'} width={'600px'}/>
            <div className="errorCaption">
                <h2>
                    Error!
                </h2>
                <h2>
                    Something went wrong!
                </h2>
            </div>
        </section>
    );

    const increaseComicsItems = (res) => {
        setComicsItems([...comicsItems, ...res]);
        setIsIncrease(false);
    };

    const renderIncreasedComicItems = () => {
        onRequest(increaseComicsItems, comicOffset);
        setComicOffset(comicOffset => comicOffset + 8);
    };

    const renderComicsCatalogue = () => {
        if (isError) return <Error />;
        else if (isLoading) return <ComicsCatalogue />;
        return <Placeholders />;
    };

    useEffect(updateComicsList, []);

    return (
        <>
            {
                renderComicsCatalogue()
            }
        </>
    );
}