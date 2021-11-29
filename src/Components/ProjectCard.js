import React, { Component } from "react";
import{
Card,
CardTitle,
CardText,
CardActions,
Button
} from "react-mdl";

class ProjectCard extends Component  {
    constructor(props) {
        super(props);

        this.github = () => {
            window.open(this.props.github);
        };

        this.live = () => {
            window.open(this.props.live);
        };

        this.windowsDownload = () => {
            window.open(this.props.wdown);
        };

        this.androidDownload = () => {
            window.open(this.props.adown);
        };
    }    

    hello(arr,color){
        const arrlist = arr.split(",");
        return arrlist.map((data)=>(<div style={{backgroundColor:color}}>{data}</div>))
    }

    render() {
        return(
            <Card shadow={5} className="project-item">
                <CardTitle className="card-title">
                <img src={this.props.image} alt={this.props.title+" image"}/>
                </CardTitle>
              <CardText className="card-text">
                <h4>{this.props.title}</h4><p>{this.props.discription}</p>
                <ul>
                    <li>
                        {this.props.lang!==undefined &&
                            <strong>Languages: {
                                <div className="items">
                                    {this.hello(this.props.lang,"rgb(255, 56, 149)")}
                                </div>    
                            }</strong>   
                        }
                    </li>
                    <li>
                        {this.props.tech!==undefined &&
                            <strong>Technologies/Libraries : {
                                <div className="items">
                                    {this.hello(this.props.tech,"rgb(43, 43, 255)")}
                                </div>
                            }</strong>   
                        }
                    </li>
                </ul>
              </CardText>
              <CardActions border center className="card-actions">
                  {this.props.github!==undefined && 
                    <Button raised ripple primary onClick={this.github.bind(this)}>
                        <i className="fa fa-github" aria-hidden="true" /> Github
                    </Button>        
                  }
                  {this.props.live!==undefined && 
                    <Button raised accent ripple style={{ margin: "0 10px" }} onClick={this.live.bind(this)}>
                        <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                    </Button>       
                  }
                  {this.props.wdown!==undefined && 
                    <Button raised accent ripple style={{ margin: "0 10px" }} onClick={this.windowsDownload.bind(this)}>
                        <i className="fa fa-download" aria-hidden="true" /> <i className="fa fa-windows" aria-hidden="true" />
                    </Button>       
                  }
                  {this.props.adown!==undefined && 
                    <Button raised accent ripple style={{ margin: "0 10px" }} onClick={this.androidDownload.bind(this)}>
                        <i className="fa fa-download" aria-hidden="true" /> <i className="fa fa-android" aria-hidden="true" />
                    </Button>       
                  }
              </CardActions>
            </Card>
        );
    }
}

export default ProjectCard;