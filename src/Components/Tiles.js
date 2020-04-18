import React from "react";


function Tiles(props) {

    return (
        <div id="work" className="container mt-5" >
            <div id="projectTiles" className="d-flex flex-wrap justify-content-center mt-5 mx-auto">
                {props.children}
            </div>
        </div>
    )
}

export default Tiles;