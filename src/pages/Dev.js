import React from "react";
import Navbar from "../Components/Navbar";
import DevProjects from "../Components/DevProjects";
import "./style.css";


function Dev() {

    return (
        <div>
            <Navbar />
            <div className="d-flex flex-row justify-content-center mb-3">
                <h3 id="projectTitle" class="text-white mt-5">Development Work</h3>
            </div>
            <DevProjects />
        </div>
    )
};

export default Dev;
