import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../stylesheets/nav-bar/index.scss';

export const NavBar = () => {
    return (
        <nav className="nav-bar">
            <Link to="/" className="nav-bar__logo">
                <span className="nav-bar__logo-icon">●</span> EAT SANO
            </Link>

            <div className="nav-bar__links">
                <NavLink
                    to="/recipes"
                    className={({ isActive }) => (isActive ? 'nav-bar__link active' : 'nav-bar__link')}
                >
                    Ver recetas
                </NavLink>

                {/* Otros NavLinks */}
                <NavLink to="/week" className={({ isActive }) => (isActive ? 'nav-bar__link active' : 'nav-bar__link')}>
                    Ver Menu
                </NavLink>
                <NavLink to="/supermarket" className={({ isActive }) => (isActive ? 'nav-bar__link active' : 'nav-bar__link')}>
                    Ver lista supermercado
                </NavLink>


            </div>
            <NavLink to="/menu" className="create-menu-button">
                Crear menú
            </NavLink>

        </nav>
    );
};

export default NavBar;