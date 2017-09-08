import React from 'react';
import HeaderNavContainer from './HeaderNavContainer';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <header>
            <div className="logo">
              <NavLink exact to='/'>
                Logo
              </NavLink>
            </div>
            <HeaderNavContainer />
        </header>
    );
};


export default Header;
