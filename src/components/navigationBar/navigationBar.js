import React from 'react';
import './navigationBar.scss';
import {Link, NavLink, Outlet} from 'react-router-dom';

export default function NavigationBar() {
    return (
        <>
            <header>
                <Link to='/' className={'marvelTittle'}>
                    <span className={'active'}>Marvel</span> information portal
                </Link>
                <nav className={'navigation'}>
                    <NavLink to='/' className={'navigationLink'}>Characters</NavLink>
                    /
                    <NavLink to='comics' className={'navigationLink'}>Comics</NavLink>
                </nav>
            </header>
            <Outlet />
        </>
    );
}