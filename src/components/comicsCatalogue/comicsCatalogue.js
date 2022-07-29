import React, {useState} from 'react';
import ComicsItem from '../comicsItem/comicsItem';
import Cover1 from '../../resources/UW.png';
import Cover2 from '../../resources/x-men.png';
import './comicsCatalgue.scss';
import MarvelBtn from '../marvelBtn/marvelBtn';

export default function ComicsCatalogue() {
    const [comicsItems] = useState([
        {imgPath: Cover1, title: 'ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB', price: '9.99$'},
        {imgPath: Cover2, title: 'X-Men: Days of Future Past', price: 'NOT AVAILABLE'},
        {imgPath: Cover1, title: 'ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB', price: '9.99$'},
        {imgPath: Cover2, title: 'X-Men: Days of Future Past', price: 'NOT AVAILABLE'},
        {imgPath: Cover1, title: 'ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB', price: '9.99$'},
        {imgPath: Cover2, title: 'X-Men: Days of Future Past', price: 'NOT AVAILABLE'},
        {imgPath: Cover1, title: 'ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB', price: '9.99$'},
        {imgPath: Cover2, title: 'X-Men: Days of Future Past', price: 'NOT AVAILABLE'}
    ]);
    return (
        <>
            <section className="comicsCatalogue">
                {
                    comicsItems.map((el, index) => {
                        return (
                            <ComicsItem imgPath={el.imgPath} title={el.title} price={el.price} key={index} />
                        );
                    })
                }

            </section>
            <div className="loadMoreBtnBox btnMargin">
                <MarvelBtn title={'LOAD MORE'} color={'r'} />
            </div>
        </>
    );
}