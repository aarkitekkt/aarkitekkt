import React from "react";

function Tile(props) {
    return (

        <div id={props.ID} onClick={() => props.showProject(props.ID)} className="d-flex flex-wrap justify-content-center mt-5 mx-auto">
            <div className="thumbnail m-1">
                <img className="Icon" src={props.Icon} alt="devIcon" />
                <img className="img-fluid" src={props.Tile} alt={props.Project} />
                <div className="imgOverlay">
                    <div className="text">{props.Project}</div>
                </div>
            </div>
        </div>

    )
}

export default Tile;