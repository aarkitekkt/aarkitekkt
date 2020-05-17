import React from "react";


function DevProject(props) {
    return (
        <div id="project" className="d-flex flex-column flex-lg-row mx-0 justify-content-center py-4">

            <div className="col-12 col-lg-8">
                <img id="projectImage" src={props.ImageUrl} className="img-fluid mb-3 px-5 py-2" alt="" />
            </div>
            <div id="projectDescription" className="col-12 col-lg-4 p-0 m-0">

                <ul className="text-white list-group">
                    <li className="list-group-item bg-dark">
                        <h4>{props.ProjectName}</h4>
                        {props.Description}
                    </li>
                    <li className="list-group-item bg-dark">
                        <h4>Tech Used</h4>
                        {props.Tech}
                    </li>
                    <li className="list-group-item bg-dark">
                        <a id="gitLink" href={props.Github}><img id="gitHubIcon" className="mx-2" src={props.GitHubIcon} alt="" /></a>
                        <a id="urlLink" href={props.URL}><img id="UrlIcon" className="mx-2" src={props.UrlIcon} alt="" /></a>
                    </li>
                </ul>
            </div>


        </div>
    )
};

export default DevProject;