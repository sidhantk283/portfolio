import React, { Component } from "react";
import{
Card,
CardTitle,
CardText,
CardActions,
Button,
CardMenu,
IconButton,
} from "react-mdl";

class ProjectCard extends Component  {
    render() {
        return(
            <Card shadow={5} className="project-item">
            <CardTitle
            style={{
                color: "#333",
                height: "180px",
                background: "url(images/chat.jpg) center / cover",
            }}
            >
            Chat Application
            </CardTitle>
            <CardText style={{ textAlign: "justify" }}>
            This is a chat Application developed on a running course from
            UDEMY.
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
            <Button raised accent ripple style={{ margin: "0 10px" }}>
                <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
            </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
            </CardMenu>
        </Card>
        );
    }
}

export default ProjectCard;