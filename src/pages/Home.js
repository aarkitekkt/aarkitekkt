import React from "react";
import { Link } from "react-router-dom";
import logo from "../bj_logo.svg";
import "./style.css";

function Home() {
    return (
        <div id="logoContainer" className="container">
            <div className="row">
                <img id="logo" className="mx-auto mb-5" src={logo} alt="logo" />
            </div>
            <div className="row">
                <h3 id="bryce" className="mx-auto mb-5 text-light">bryce johnson</h3>
            </div>
            <div id="buttonRow" className="d-flex justify-content-center">
                <Link to="./dev" className="mx-2">
                    <div className="navIcon">
                        <img id="devButton" src="./assets/images/icons/devIcon.png" alt="dev" />
                        <div className="navOverlay">
                            <div className="text">dev
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="./3d" className="mx-2">
                    <div className="navIcon">
                        <img id="3dButton" src="./assets/images/icons/3dIcon.png" alt="3d" />
                        <div className="navOverlay">
                            <div className="text">3d
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="./built" className="mx-2">
                    <div className="navIcon">
                        <img id="builtButton" src="./assets/images/icons/builtIcon.png" alt="built" />
                        <div className="navOverlay">
                            <div className="text">built
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="./about" className="mx-2">
                    <div className="navIcon">
                        <img id="aboutButton" src="./assets/images/icons/aboutIcon.png" alt="about" />
                        <div className="navOverlay">
                            <div className="text">about
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
};

export default Home;
