import React from 'react';
import {useLocation} from 'react-router-dom';

export default function ItemPage() {
    const location = useLocation();

    const mainPath = location.pathname.split('/')[1];

    const checkPath = () => {
        if (mainPath === 'character') return <h2>Character page</h2>;
        else if (mainPath === 'comic') return <h2>Comic page</h2>;
    };

    return (
        
        checkPath()
        
    );
}