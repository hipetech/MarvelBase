import React from 'react';
import './navigationBar.scss';

export default function NavigationBar() {
    return (
        <>
            <header>
                <a href="#" className={'marvelTittle'}>
                    <span className={'activeRed'}>Marvel</span> information portal
                </a>
                <nav className={'navigation'}>
                    <a className={'navigationLink'} href="#">Characters</a>
                    /
                    <a className={'navigationLink'} href="#">Comics</a>
                </nav>
            </header>
        </>
    );
}