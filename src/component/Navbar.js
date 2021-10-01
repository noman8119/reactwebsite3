import React from 'react';
import nav from '../images/logo.png';
const Navbar = () => {
    return (
        <section className="nav-sec navbar1 w-100">
            <div className="container">
                <nav className="navbar navbar-expand-md navbar-light ">
                    <a
                     className="navbar-brand" href="google.html"><img id="imgLocation" src={nav} alt="logo"/></a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav nav-items ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" data-scroll href="#demo">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-scroll href="#demo1">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-scroll href="#demo2">services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-scroll href="#demo3">prorfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-scroll href="#demo4">team</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-scroll href="#demon">career</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-scroll href="#demon">contact</a>
                            </li>
                            <li className="nav-item">
                            <button className="login-btn">login</button>
                            </li>
                        </ul>
                    </div> 
                </nav>
            </div>
        </section>
    );
}
export default Navbar;