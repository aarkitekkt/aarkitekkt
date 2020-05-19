import React from "react";


function Project(props) {
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
                </ul>
            </div>


        </div>
    )
};

export default Project;