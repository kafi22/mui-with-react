import React from 'react';
import { NavLink } from 'react-router-dom';
import {Typography,  Container} from '@mui/material';

import NavContainer from '../Wrappers/NavContainer';

const Navbar = () => {
  return (
    
      <NavContainer>
       <nav>

        <NavLink to={'technology'} >
            Technology
        </NavLink>

        <NavLink to={'design'}>
            Design
        </NavLink>

        <NavLink to={'culture'}>
            Culture
        </NavLink>

        <NavLink to={'business'}>
          Business
        </NavLink>

        <NavLink to={'politics'}>
          Politics
        </NavLink>

        <NavLink to={'opinion'}>
        Opinion
        </NavLink>

        <NavLink to={'science'}>
          Science
        </NavLink>

        <NavLink to={'health'}>
          Health
        </NavLink>

        <NavLink to={'style'}> 
          Style
        </NavLink>

        <NavLink to={'travel'}>
          Travel
        </NavLink>

       </nav>
      
      </NavContainer>
  );
};

export default Navbar;
