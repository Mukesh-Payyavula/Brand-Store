import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css'; 

const Navbar = () => {
    const state = useSelector(state => state.handleCart);
    return (
        <nav className="navbar">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    <img className="logo" src="./assets/FashonHouse.png" alt="Fashion House" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="buttons">
                        <NavLink to="/login" className="btn btn-outline-dark"><i className="fa fa-sign-in-alt"></i> Login</NavLink>
                        <NavLink to="/register" className="btn btn-outline-dark"><i className="fa fa-user-plus"></i> Register</NavLink>
                        <NavLink to="/cart" className="btn btn-outline-dark"><i className="fa fa-cart-shopping"></i> Cart ({state.length})</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
