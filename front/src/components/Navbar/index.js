import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const logout = async () => {
        const request = await fetch('http://localhost:8080/api/v1/auth/logout', {credentials:'include'});
        if (request.status === 204) {
          localStorage.removeItem('loggedIn');
          navigate('/login');
        }
      };


return (
	<>
	<Nav>
		<Bars />

		{
            localStorage.getItem("loggedIn") ? 

            <NavMenu>
            <NavLink to='/' activeStyle>
                Home
            </NavLink>
            <NavLink to='/support' activeStyle>
                Support
            </NavLink>
            <NavLink to='/team' activeStyle>
                Team
            </NavLink>
            <NavLink to='/challenge' activeStyle>
                Challenge
            </NavLink>
            <NavLink to='/league' activeStyle>
                League
            </NavLink>
            <NavBtn >
            <button onClick={logout}>Logout</button>
            </NavBtn>
            </NavMenu>

            :

            <NavMenu>
            <NavLink to='/' activeStyle>
                Home
            </NavLink>
            <NavLink to='/login' activeStyle>
                Login
            </NavLink>
            <NavLink to='/register' activeStyle>
                Register
            </NavLink>
            </NavMenu>
        }
	</Nav>
	</>
);
};

export default Navbar;
