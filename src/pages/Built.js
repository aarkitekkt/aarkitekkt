import React from "react";
import Navbar from "../Components/Navbar";
import BuiltProjects from "../Components/BuiltProjects";
import "./style.css";


function Dev() {

    return (
        <div>
            <Navbar />
            <div className="d-flex flex-row justify-content-center mb-3">
                <h3 id="projectTitle" class="text-white">built</h3>
            </div>
            <BuiltProjects />
        </div>
    )
};

export default Dev;
