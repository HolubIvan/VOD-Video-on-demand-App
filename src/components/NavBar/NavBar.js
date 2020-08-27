import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = ()=>{

    return(
        <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__item'>
                    <NavLink to='/' className="nav__link">Home</NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink to='/categories' className="nav__link">Categories</NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink to='/popular' className="nav__link">Popular</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;