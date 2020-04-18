import React from "react";
import Tiles from "../Components/Tiles";
import Navbar from "../Components/Navbar";
import Project from "../Components/Project";
import "./style.css";


function Work() {

    return (
        <div>
            <Navbar />
            <Project
                ImageUrl="./assets/images/Devour-Burger2.gif"
                Github="https://github.com/aarkitekkt/eat-da-burger"
                GitHubIcon="./assets/images/GitHub-Mark-Light-32px.png"
                URL="https://aarkitekkt-eat-da-burger.herokuapp.com/"
                UrlIcon="./assets/images/linkIcon.png"
            />
            <Tiles />
        </div>
    )
};

export default Work;
