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

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
    this.ge365 = () => {
      window.open(
        "https://github.com/sidhantk283/entertainment365"
      );
    };
    this.le365 = () => {
      window.open(
        "https://sidhantk283.github.io/entertainment365/"
      );
    };
    this.gblogging = () => {
      window.open("https://github.com/sidhantk283/Blogging-Site");
    };
    this.lblogging = () => {
      window.open("https://sidhantk283.github.io/Blogging-Site/");
    };
    this.gquiz = () => {
      window.open("https://github.com/sidhantk283/Quiz-JavaScript");
    };
    this.lquiz = () => {
      window.open("https://sidhantk283.github.io/Quiz-JavaScript/");
    };
    this.gportfolio = () => {
      window.open("https://github.com/sidhantk283/portfolio");
    };
    this.lportfolio = () => {
      window.open("https://portfolio-sidhant.herokuapp.com/");
    };
    this.gsanskmal = () => {
      window.open("https://github.com/1932Prajacta/PL406-WebTech-Project");
    };
    this.lsanskmal = () => {
      window.open("");
    };
    this.gry = () => {
      window.open("https://github.com/rudreshgawas1914/PL405-Project");
    };
    this.lry = () => {
      window.open("");
    };
    this.ggg = () => {
      window.open("https://github.com/sidhantk283/GittyGames");
    };
    this.dagg = () => {
      window.open("https://drive.google.com/file/d/1borBTLjUg6oUuGvAkh_dhZ4Z4T_I4ay8/view?usp=sharing");
    };
    this.dwgg = () => {
      window.open("https://drive.google.com/drive/folders/1XOotLPgJ4WNM78nvirp006UiGAgWe5Yp?usp=sharing");
    };
    this.gspookytunnel = () => {
      window.open("https://github.com/sidhantk283/SpookyTunnel");
    };
    this.dspookytunnel = () => {
      window.open("https://drive.google.com/file/d/14BLDuw3BSEO6gxDEFj5so4CdJKGmNF2N/view?usp=sharing");
    };

    this.toggleCategories = () => {
      if (this.state.activeTab === 0) {
        return (
          <div className="projects-grid">
            {/*Portfolio*/}
            <Card shadow={5} className="project-item">
              <CardTitle className="card-title" style={{background: "url(images/portfolio/1.JPG) center / cover"}} />
              <CardText className="card-text">
                <h4>Portfolio Site</h4><p>Personal Portfolio Site displaying my projects and information developed using <strong>React JS</strong></p>
              </CardText>
              <CardActions border style={{ margin: "0 auto 0 auto"}}>
                <Button raised ripple primary onClick={this.gportfolio.bind(this)}>
                {/* {this.e365.bind(this)} */}
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }} onClick={this.lportfolio.bind(this)}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
            </Card>
            {/*Sanskrutik-mal*/}
            <Card shadow={5} className="project-item">
              <CardTitle className="card-title" style={{background: "url(images/sansk-mal/1.jpeg) center / cover"}} />
              <CardText className="card-text">
                <h4>Sanskrutik-mal</h4><p>Social Network Website specifically designed for the cultural audience of Goa. This web app will give a platform for all the artists to display their content.<br/>A complete CLient-Server Site Build with <strong>MERN Stack</strong><br/></p>
              </CardText>
              <CardActions border style={{ margin: "0 auto 0 auto"}}>
                <Button raised ripple primary onClick={this.gsanskmal.bind(this)}>
                {/* {this.e365.bind(this)} */}
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }} onClick={this.lsanskmal.bind(this)} disabled>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
            </Card>            
          </div>
        );
      } else if (this.state.activeTab === 1) {
        return (
          <div className="projects-grid">
            {/*Entertainment 365*/}
            <Card shadow={5} className="project-item">
              <CardTitle className="card-title" style={{background: "url(images/e365/1.JPG) center / cover"}} />
              <CardText className="card-text">
                <h4>Entertainment365</h4><p>Entertainment365 is a Front-end page similar to www.hotstar.com</p>
              </CardText>
              <CardActions border style={{ margin: "0 auto 0 auto"}}>
                <Button raised ripple primary onClick={this.ge365.bind(this)}>
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }} onClick={this.le365.bind(this)}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
            </Card>
            {/*Blogging Site*/}
            <Card shadow={5} className="project-item">
              <CardTitle className="card-title" style={{background: "url(images/blogging/1.JPG) center / cover"}} />
              <CardText className="card-text">
                <h4>Blogging Site</h4>This site is a basic front-end template for a blogging site inspired from medium.com<p></p>
              </CardText>
              <CardActions border style={{ margin: "0 auto 0 auto"}}>
                <Button raised ripple primary onClick={this.gblogging.bind(this)}>
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }} onClick={this.lblogging.bind(this)}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
            </Card>
            {/*Blogging Site*/}
            <Card shadow={5} className="project-item">
              <CardTitle className="card-title" style={{background: "url(images/quiz/1.JPG) center / cover"}} />
              <CardText className="card-text">
                <h4>Quiz App</h4><p>A quiz app using HTML/CSS for Front-end and vanila JavaScript for working of the app.</p>
              </CardText>
              <CardActions border style={{ margin: "0 auto 0 auto"}}>
                <Button raised ripple primary onClick={this.gquiz.bind(this)}>
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }} onClick={this.lquiz .bind(this)}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
            </Card>
          </div>
        );
      }
      else if (this.state.activeTab === 2){
        return (
          <div className="projects-grid">
            {/*Railyatri*/}
            <Card shadow={5} className="project-item">
              <CardTitle className="card-title" style={{background: "url(images/RailYatri/1.JPG) center / cover"}} />
              <CardText className="card-text">
                <h4>Railyatri.com</h4><p>A railway management system for Indian Railways.Core focus on this project was on software development methodlogies.<br/>Built client side with <strong>HTML/CSS/JS</strong> and server-side using <strong>Laravel framework</strong> and databse used is <strong>MYSQL</strong></p>
              </CardText>
              <CardActions border style={{ margin: "0 auto 0 auto"}}>
                <Button raised ripple primary onClick={this.gry.bind(this)}>
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }} onClick={this.lry.bind(this)} disabled>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
            </Card>
          </div>
        );
      }else {
        return(
          <div className="projects-grid">
            {/*GittyGames*/}
            <Card shadow={5} className="project-item">
              <CardTitle className="card-title" style={{background: "url(images/gittygames.jpg) center / cover"}} />
              <CardText className="card-text">
                <h4>Gitty Games</h4><p>A Multi-Game Android App build using <strong>Unity3D Gaming Engine</strong> which had : <br/>(1) Impetus<br />(1) ZigZag Trail<br />(3) Impetus</p>
              </CardText>
              <CardActions border style={{ margin: "0 auto 0 auto"}}>
                <Button raised ripple primary onClick={this.ge365.bind(this)}>
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }} onClick={this.dagg.bind(this)}>
                  <i className="fa fa-download" aria-hidden="true" /> <i className="fa fa-android" aria-hidden="true" />
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }} onClick={this.dwgg.bind(this)}>
                  <i className="fa fa-download" aria-hidden="true" /> <i className="fa fa-windows" aria-hidden="true" />
                </Button>
              </CardActions>
            </Card>
            {/*Spooky Tunnel*/}
            <Card shadow={5} className="project-item">
              <CardTitle className="card-title" style={{background: "url(images/spookytunel.jpeg) center / cover"}} />
              <CardText className="card-text">
              <h4>Spooky Tunnel</h4><p>A infinite looping arcade game where we have to control the ghost as he travels through the tunnel, dodging all the obstacles and herdles and eventually make a highscore. Game is built using <strong>Unity3D Game Engine</strong></p>
              </CardText>
              <CardActions border style={{ margin: "0 auto 0 auto"}}>
                <Button raised ripple primary onClick={this.gspookytunnel.bind(this)}>
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }} onClick={this.dspookytunnel.bind(this)}>
                  <i className="fa fa-download" aria-hidden="true" /> <i className="fa fa-android" aria-hidden="true" />
                </Button>
              </CardActions>
            </Card>
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
