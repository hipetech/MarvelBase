import React from 'react';
import {useLocation} from 'react-router-dom';
import ItemPageCharInfo from '../components/itemPageCharInfo/ItemPageCharInfo';

export default function ItemPage() {
    const location = useLocation();

    const mainPath = location.pathname.split('/')[1];

    const checkPath = () => {
        if (mainPath === 'character'){
            const {imgPath, title, description} = location.state;
            return <ItemPageCharInfo thumbnail={imgPath} title={title} description={description}/>;
        }
        else if (mainPath === 'comic') return <h2>Comic page</h2>;
        return (
            <h2>Wrong path</h2>
        );
    };

    return (
        
        checkPath()
        
    );
}