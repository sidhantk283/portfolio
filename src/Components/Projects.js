import React, { Component } from "react";
import {
  Tab,
  Tabs,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";
import ProjectCard from "./ProjectCard";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
    this.toggleCategories = () => {
      if (this.state.activeTab === 0) {
        return (
          <div className="projects-grid">
            <ProjectCard
              image="images/portfolio/1.JPG"
              title="Portfolio Site"
              discription="Personal Portfolio Site displaying my projects and information developed using React JS"
              lang="HTML,CSS,Javascript"
              tech="React"
              github="https://github.com/sidhantk283/portfolio"
              live="https://portfolio-sidhant.herokuapp.com"
            />

            <ProjectCard
              image="images/sansk-mal/1.jpeg"
              title="Sanskrutik-mal"
              lang="HTML,CSS,Javascript"
              tech="MongoDB,ExpressJS,React,NodeJS"
              discription="Social Network Website specifically designed for the cultural audience of Goa. This web app will give a platform for all the artists to display their content. A complete CLient-Server Site Build with MERN Stack"
              github="https://github.com/1932Prajacta/PL406-WebTech-Project"
            /> 
          </div>
        );
      } else if (this.state.activeTab === 1) {
        return (
          <div className="projects-grid">
            <ProjectCard
              image="images/pixel/01.JPG"
              title="Pixel.com"
              discription="Pixxel is a stock image website where you can get stock images for your website or graphic design or might be any project you working on."
              lang="HTML,CSS,Javascript,PHP"
              tech="mySQL"
              github="https://github.com/sidhantk283/1917_PL305LabProject"
            />
            <ProjectCard
              image="images/e365/1.JPG"
              title="Entertainment365"
              discription="Entertainment365 is a Front-end page similar to www.hotstar.com"
              lang="HTML,CSS,Javascript"
              github="https://github.com/sidhantk283/entertainment365"
              live="https://sidhantk283.github.io/entertainment365/"
            />
            <ProjectCard
              image="images/blogging/1.JPG"
              title="Blogging Site"
              discription="This site is a basic front-end template for a blogging site inspired from medium.com"
              lang="HTML,CSS,Javascript"
              github="https://github.com/sidhantk283/Blogging-Site"
              live="https://sidhantk283.github.io/Blogging-Site/"
            />
            <ProjectCard
              image="images/quiz/1.JPG"
              title="Quiz App"
              lang="HTML,CSS,Javascript"
              discription="A quiz app using HTML/CSS for Front-end and vanila JavaScript for working of the app."
              github="https://github.com/sidhantk283/Quiz-JavaScript"
              live="https://sidhantk283.github.io/Quiz-JavaScript"
            />
          </div>
        );
      }
      else if (this.state.activeTab === 2){
        return (
          <div className="projects-grid">
            <ProjectCard
              image="images/RailYatri/1.JPG"
              title="Railyatri.com"
              discription="A railway management system for Indian Railways.Core focus on this project was on software development methodlogies.Built client side with HTML/CSS/JS and server-side using Laravel framework and databse used is MYSQL."
              lang="HTML,CSS,Javascript,PHP"
              tech="Bootstrap,Laravel,mySQL"
              github="https://github.com/rudreshgawas1914/PL405-Project"
            />
          </div>
        );
      }else {
        return(
          <div className="projects-grid">
            <ProjectCard
              image="images/gittygames.jpg"
              title="Gitty Games"
              discription="A Multi-Game Android App build using <strong>Unity3D Gaming Engine</strong> which had : (1) Impetus (2) ZigZag Trail (3) Chromatics"
              lang="C#"
              tech="Unity3D,Photoshop,Google Play Console"
              github="https://github.com/sidhantk283/GittyGames"
              adown="https://drive.google.com/file/d/1borBTLjUg6oUuGvAkh_dhZ4Z4T_I4ay8/view?usp=sharing"
              wdown="https://drive.google.com/drive/folders/1XOotLPgJ4WNM78nvirp006UiGAgWe5Yp?usp=sharing"
            />
            <ProjectCard
              image="images/spookytunel.jpeg"
              title="Spooky Tunnel"
              discription="A infinite looping arcade game where we have to control the ghost as he travels through the tunnel, dodging all the obstacles and herdles and eventually make a highscore. Game is built using Unity3D Game Engine"
              lang="C#"
              tech="Unity3D,Photoshop,Google Play Console"
              github="https://github.com/sidhantk283/SpookyTunnel"
              adown="https://drive.google.com/file/d/14BLDuw3BSEO6gxDEFj5so4CdJKGmNF2N/view?usp=sharing"
            />
            <ProjectCard
              image="images/tetrix.jpg"
              title="Tetrix"
              discription="Classic tetrix game developed using java from sratch."
              lang="Java"
              tech="Eclipse-JavaFX"
              github="https://github.com/SidhantKarbotkar/TetrisJavaFX_OOP"
            />
          </div>
        );
      }
    };
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
          className="project-tabs"
          style={{marginLeft:"auto",marginRight:"auto",width:"80%"}}
        >
          <Tab>React JS</Tab>
          <Tab>HTML/CSS/JS</Tab>
          {/* <Tab>Angular</Tab> */}
          <Tab>Laravel</Tab>
          <Tab>Games</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
