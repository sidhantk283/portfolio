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

    this.chatApplication = () => {
      window.location.assign(
        "https://github.com/sidhantk283/portfolio"
      );
    };
    this.calculator = () => {
      window.location.assign(
        "https://github.com/ismail5g/Calculator-Using-ReactJS"
      );
    };
    this.portfolio = () => {
      window.location.assign("https://github.com/ismail5g/my-portfolio");
    };
    this.portfoliolive = () => {
      window.location.assign("https://devismail.netlify.app/");
    };
    this.ecommerce = () => {
      window.location.assign("https://github.com/ismail5g/EasyBazar");
    };
    this.leavemangement = () => {
      window.location.assign("https://github.com/ismail5g/Leave-Management");
    };
    this.crudapplication = () => {
      window.location.assign(
        "https://github.com/ismail5g/BookListCrud_MVC-Asp.Net-Core"
      );
    };
    this.facebook = () => {
      window.location.assign(
        "https://github.com/ismail5g/Facebook-Education-Perpose"
      );
    };
    this.toggleCategories = () => {
      if (this.state.activeTab === 0) {
        return (
          <div className="projects-grid">
            {/* Chat-Application */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/bg1.jpg) center / cover",
                }}
              >
                Project Title
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                Description Here
              </CardText>
              <CardActions border>
                <Button
                  style={{ margin: "0 10px" }}
                  raised
                  ripple
                  primary
                  onClick={this.chatApplication.bind(this)}
                >
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }} onClick="https://portfolio-sidhant.herokuapp.com/">
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        );
      } else if (this.state.activeTab === 1) {
        return (
          <div className="projects-grid">
            
          </div>
        );
      }
      if (this.state.activeTab === 2) {
        return (
          <div>
          </div>
        );
      } else {
        return (
          <div>
            ok
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
          <Tab>HTML/CSS/JS</Tab>
          <Tab>React JS</Tab>
          <Tab>Angular</Tab>
          <Tab>Laravel</Tab>
          <Tab></Tab>
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
