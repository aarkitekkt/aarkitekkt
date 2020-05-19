import React from "react";


function ThreeDProject(props) {
    return (
        <div id="project" className="d-flex flex-column flex-lg-row mx-0 justify-content-center pt-4">

            <div className="col-12 col-lg-10">
                <img id="projectImage" src={props.ImageUrl} className="img-fluid mb-3 px-5 py-2" alt="" />
            </div>
            <div id="projectDescription" className="col-12 col-lg-2 p-0 m-0">

                <ul className="text-white list-group">
                    <li className="list-group-item bg-dark">
                        <h4>{props.ProjectName}</h4>
                    </li>
                </ul>
            </div>


        </div>
    )
};

export default ThreeDProject;