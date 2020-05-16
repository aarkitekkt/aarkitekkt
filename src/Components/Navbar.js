import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="container-fluid bg-transparent">
            <div className="container">
                <div className="row">
                    <div className="d-flex col-12 col-md-4 justify-content-center justify-content-md-start">
                        <Link className="navbar-brand" to="./home">
                            <img id="navLogo" className="pt-2" src="./assets/images/bj_logo_white.png" alt="logo" />
                        </Link>
                    </div>
                    <div className="d-flex col-12 col-md-8 justify-content-center justify-content-md-end">
                        <ul className="nav pb-3 pt-3">
                            <li className="nav-item">
                                <Link to="./dev" className="align-middle" ><img id="devButton" src="./assets/images/devIcon.png" alt="dev" /></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="./3d" className="align-middle" ><img id="3dButton" src="./assets/images/3dIcon.png" alt="3d" /></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="./built" className="align-middle" ><img id="builtButton" src="./assets/images/builtIcon.png" alt="built" /></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="./about" className="align-middle" ><img id="aboutButton" src="./assets/images/aboutIcon.png" alt="about" /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar;