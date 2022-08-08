import React from 'react';
import {useLocation} from 'react-router-dom';
import ItemPageCharInfo from '../components/itemPageCharInfo/ItemPageCharInfo';
import ItemPageComicInfo from '../components/itemPageComicInfo/itemPageComicInfo';

export default function ItemPage() {
    const location = useLocation();

    const mainPath = location.pathname.split('/')[1];

    const checkPath = () => {
        if (mainPath === 'character'){
            const {imgPath, title, description} = location.state;
            return <ItemPageCharInfo thumbnail={imgPath} title={title} description={description}/>;
        }
        else if (mainPath === 'comic') {
            const {thumbnail, title, description, price, language, pageCount} = location.state;
            return <ItemPageComicInfo
                thumbnail={thumbnail}
                title={title}
                description={description}
                price={price}
                language={language}
                pageCount={pageCount}
            />;
        }
        return (
            <h2>Wrong path</h2>
        );
    };

    return (
        
        checkPath()
        
    );
}