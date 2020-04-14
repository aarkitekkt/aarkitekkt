import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div id="logoContainer" className="container">
            <div className="row">
                <img id="logo" className="mx-auto mb-4" src="./assets/images/bj_logo_grey.png" alt="logo" />
            </div>
            <div className="row">
                <h3 className="mx-auto mb-5">bryce johnson</h3>
            </div>
            <div id="buttonRow" className="d-flex justify-content-center">
                <Link to="./work" className="mx-3 btn btn-outline-dark">work</Link>
                <Link to="./about" className="mx-3 btn btn-outline-dark">about</Link>
            </div>
        </div>
    )
};

export default Home;
