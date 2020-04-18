import React, { Component } from "react";
import Project from "./Project";
import Tiles from "./Tiles";
import Tile from "./Tile";
import projectList from "../projects.json";


class Projects extends Component {

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

                <Project
                    ImageUrl={this.state.currentProject.ImageUrl}
                    Github={this.state.currentProject.Github}
                    GitHubIcon={this.state.currentProject.GitHubIcon}
                    URL={this.state.currentProject.URL}
                    UrlIcon={this.state.currentProject.UrlIcon}
                />
                <Tiles>
                    {
                        this.state.projects.map(project => (
                            <Tile
                                ID={project.ID}
                                Icon={project.Icon}
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

export default Projects;