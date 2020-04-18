import React, { Component } from "react";
import Tile from "../Components/Tile"
import "./style.css";
import projects from "../projects.json";

class Work extends Component {

    state = {
        projects
    };

    render() {
        return (
            <div id="projectTiles" className="container mt-5" >
                {
                    this.state.projects.map(project => (
                        <Tile
                            ID={project.ID}
                            Icon={projects.Icon}
                            Tile={project.Tile}
                            Project={project.Project}
                        />
                    ))
                }
            </div>
        )
    }
};

export default Work;
