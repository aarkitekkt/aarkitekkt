import React, { Component } from "react";
import ThreeDProject from "./3dProject";
import Tiles from "./Tiles";
import Tile from "./Tile";
import projectList from "../3d.json";


class ThreeDProjects extends Component {

    state = {
        projects: projectList,
        currentProject: projectList[0]
    };

    showProject = (id) => {

        var currentId = id;

        console.log(currentId);

        var current = projectList.filter(project => project.ID === currentId);

        console.log("Current Project is " + this.state.currentProject.ID);

        console.log(current);

        this.setState({ currentProject: current[0] })
    }

    render() {
        return (
            <div>

                <ThreeDProject
                    ImageUrl={this.state.currentProject.ImageUrl}
                    ProjectName={this.state.currentProject.Project}
                />
                <Tiles>
                    {
                        this.state.projects.map(project => (
                            <Tile
                                ID={project.ID}
                                Tile={project.Tile}
                                Project={project.Project}
                                showProject={this.showProject}
                            />
                        ))
                    }
                </Tiles>
            </div>
        )
    }
}

export default ThreeDProjects;