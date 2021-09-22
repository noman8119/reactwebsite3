import React from 'react';
const Navbar = () => {
    return (
        <section className="bg-dark fixed-top">
            <div className="container">
                <nav className="navbar navbar-expand-md bg-dark navbar-dark ">
                    <a
                     className="navbar-brand" href="google.html">Stars</a>
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
                                <a className="nav-link" data-scroll href="#demo2">Our Team</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-scroll href="#demo3">Prices</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>
    );
}
export default Navbar;