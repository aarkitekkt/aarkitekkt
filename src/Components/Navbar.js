import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="container-fluid bg-transparent">
            <div className="container">
                <div className="row">
                    <div className="d-flex col-12 col-md-4 justify-content-center justify-content-md-start">
                        <Link className="navbar-brand p-0 mx-auto" to="./home">
                            <img id="navLogo" className="pt-2" src="./assets/images/bj_logo_white.png" alt="logo" />
                        </Link>
                    </div>
                    <div className="d-flex col-12 col-md-8 justify-content-center justify-content-md-end">
                        <ul className="nav pb-3 pt-2">
                            <li className="nav-item mx-2">
                                <Link to="./dev">
                                    <div className="navIcon">
                                        <img id="devButton" src="./assets/images/devIcon.png" alt="dev" />
                                        <div className="navOverlay">
                                            <div className="text">dev
                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link to="./3d">
                                    <div className="navIcon">
                                        <img id="3dButton" src="./assets/images/3dIcon.png" alt="3d" />
                                        <div className="navOverlay">
                                            <div className="text">3d
                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link to="./built">
                                    <div className="navIcon">
                                        <img id="builtButton" src="./assets/images/builtIcon.png" alt="built" />
                                        <div className="navOverlay">
                                            <div className="text">built
                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link to="./about">
                                    <div className="navIcon">
                                        <img id="aboutButton" src="./assets/images/aboutIcon.png" alt="about" />
                                        <div className="navOverlay">
                                            <div className="text">about
                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar;