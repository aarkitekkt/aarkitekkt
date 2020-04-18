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
                                <Link to="./work" className="text-white px-3 align-middle" >work</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="./about" className="text-white px-3 align-middle">about</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar;