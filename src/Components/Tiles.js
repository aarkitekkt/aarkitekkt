import React, { Component } from "react";
import Tile from "../Components/Tile"
import projects from "../projects.json";

class Tiles extends Component {

    state = {
        projects
    };

    render() {
        return (
            <div id="work" className="container mt-5" >
                <div id="projectTiles" className="d-flex flex-wrap justify-content-center mt-5 mx-auto">
                    {
                        this.state.projects.map(project => (
                            <Tile
                                ID={project.ID}
                                Icon={project.Icon}
                                Tile={project.Tile}
                                Project={project.Project}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
};

export default Tiles;