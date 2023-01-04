import React from 'react'
import {NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div >
            <nav className='container navbar navbar-expand-md navbar-light bg-light'>
                <NavLink to="/" className='navbar-brand '><h1 className="display-6">PolicyTracker</h1></NavLink>
                <button type='button' data-bs-toggle='collapse' data-bs-target='#navbarnav' className='navbar-toggler' aria-controls='navbarnav'
                    aria-expanded='false' aria-label='Toggle Nav'>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarnav">
                    <ul className='navbar-nav'>
                        <li className='nav-item'> <NavLink to="/" className='nav-link'> Add Policy</NavLink></li>
                        <li className='nav-item '> <NavLink to="/add" className='nav-link'>  All Policies</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;