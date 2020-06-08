import React from "react";
import Navbar from "../Components/Navbar"
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

                        <p className="text-white">I’m a full stack developer with an emphasis on front end development and a background in architecture and design. With a Full Stack Web Development certificate, a Master of Architecture, and professional experience in graphic design, industrial design, and 3D rendering/animation, I am adaptable and always looking to develop new skills in order to create user-focused experiences.  My strength is being able to combine design-thinking and problem solving with the willingness to learn new skills in order to produce creative outcomes.  Working alongside many talented students and design professionals, I have completed a variety of projects including building a web application to track earthquake data, designing a system to rapidly prototype and build a series of iPad enclosures, creating 3d animations to play inside convenience stores, and building a home for a family on the Navajo Indian Reservation in southeastern Utah. </p>
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
                            <a href="https://github.com/aarkitekkt"><img className="contact mr-3"
                                src="./assets/images/GitHub-Mark-Light-32px.png" alt="" /><span
                                    className="text-white">github.com/aarkitekkt</span></a>
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
                            <a href="./assets/images/BryceJohnson-resume.pdf" download><img class="contact mr-3"
                                src="./assets/images/resumeIcon.png" alt="" /><span class="text-white">resume</span></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/aarkitekkt/"><img class="contact mr-3"
                                src="./assets/images/LI-In-Bug_white.png" alt="" /><span
                                    class="text-white">linkedin.com/in.aarkitekkt</span></a>
                        </li>
                    </ul>
                </div>

            </div >
        </div>
    )
};

export default About;
