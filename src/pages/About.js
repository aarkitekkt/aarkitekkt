import React from "react";
import Navbar from "../Components/Navbar"
import { Link } from "react-router-dom";
import "./style.css";

function About() {
    return (
        <div>
            <Navbar />
            <div id="about" className="container mt-5" style={{ background: "#000000" }}>
                <div className="row mb-5">
                    <div id="pic" className="col-12 col-md-4">
                        <img id="profilePic" className="mb-5" src="./assets/images/profilePic_sml.png" alt="Profile Pic" />
                    </div>
                    <div className="col-12 col-md-8">
                        <h3 className="text-white">about me</h3>

                        <p className="text-white">I am a Designer, 3D Artist, and aspiring Developer living in Salt Lake City.
                        After earning a
                        Master of Architecture in
                        2011, I began working in a small studio where I teamed up with a few other talented designers to
                        complete works in a
                        variety of disciplines. While I specialized in 3D rendering and animation at Freehive, I have
                        completed
                        projects in graphic design, product design, and industrial design.
                    </p>
                        <p className="text-white">
                            In addition to my love of design, I am an avid hiker, skier, three-time marathoner, and a huge
                            soccer fan. I enjoy exploring the outdoors, working on my house, and watching soccer games with
                            my wife
                        and son.</p>
                    </div>
                </div>
                <div className="row mb-5">
                    <ul id="contact">
                        <li>
                            <Link to="https://github.com/aarkitekkt"><img className="contact mr-3"
                                src="./assets/images/GitHub-Mark-Light-32px.png" alt="" /><span
                                    className="text-white">github.com/aarkitekkt</span></Link>
                        </li>
                        <li>
                            <img className="contact mr-3" src="./assets/images/mailIcon.png" alt="" /><span
                                className="text-white">bryce@aarkitekkt.com</span>
                        </li>
                        <li>
                            <img className="contact mr-3" src="./assets/images/phoneIcon.png" alt="" /><span
                                className="text-white">801-808-5534</span>
                        </li>
                        <li>
                            <Link to="./assets/images/BryceJohnson_resume.pdf" download><img class="contact mr-3"
                                src="./assets/images/resumeIcon.png" alt="" /><span class="text-white">resume</span></Link>
                        </li>
                        <li>
                            <Link to="https://www.linkedin.com/in/aarkitekkt/"><img class="contact mr-3"
                                src="./assets/images/LI-In-Bug_white.png" alt="" /><span
                                    class="text-white">linkedin.com/in.aarkitekkt</span></Link>
                        </li>
                    </ul>
                </div>

            </div >
        </div>
    )
};

export default About;
