import React from "react";
import { Link } from "react-router-dom";

function Project(props) {
    return (
        <div id="project" className="justify-content-center">
            <div className="d-flex flex-row justify-content-center mb-3">
                <h3 id="projectTitle" class="text-white">selected works</h3>
            </div>
            <div className="d-flex flex-row justify-content-center mb-3">
                <img id="projectImage" src={props.ImageUrl} class="img-fluid" alt="" />
            </div>
            <div className="d-flex flex-row justify-content-center mb-3">
                <Link id="gitLink" to={props.Github}><img id="gitHubIcon" class="px-2" src={props.GitHubIcon} alt="" /></Link>
                <Link id="urlLink" to={props.URL}><img id="UrlIcon" class="px-2" src={props.UrlIcon} alt="" /></Link>
            </div>
        </div>
    )
};

export default Project;