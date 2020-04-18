import React from "react";


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
                <a id="gitLink" href={props.Github}><img id="gitHubIcon" class="px-2" src={props.GitHubIcon} alt="" /></a>
                <a id="urlLink" href={props.URL}><img id="UrlIcon" class="px-2" src={props.UrlIcon} alt="" /></a>
            </div>
        </div>
    )
};

export default Project;