import React from "react";
import Navbar from "../Components/Navbar";
import ThreeDProjects from "../Components/3dProjects";
import "./style.css";


function Dev() {

    return (
        <div>
            <Navbar />
            <div className="d-flex flex-row justify-content-center mb-3">
                <h3 id="projectTitle" class="text-white mt-5">3d</h3>
            </div>
            <ThreeDProjects />
        </div>
    )
};

export default Dev;
