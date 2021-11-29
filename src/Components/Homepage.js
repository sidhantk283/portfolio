import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
// import Aboutme from "./Aboutme";
// import Contact from "./Contact";
// import SimpleImageSlider from "react-simple-image-slider";

class Homepage extends Component {
  constructor(props){
    super(props);
    this.state = {
      height : window.innerHeight,
      width : window.innerWidth
    }
  }
  images = [
    { url: "images/bg1.jpg" },
    { url: "images/bg2.jpg" }
  ]
  render() {
    return (
      <div style={{ width: "100%", margin: "auto"}}>
        <Grid className="homepage-grid demo-grid-ruler" style={{marginTop:"10vh",height:"90vh"}}>
          <Cell col={12}>
            <div className="profile-img-border">
              <img
                className="profile-img"
                src="images/profile.jpg"
                alt="sidhant-profile-pic"
              />
            </div>
            <div className="banner-text">
              <h1>SIDHANT KARBOTKAR</h1>
              <hr />
              <p>
                HTML | CSS | BOOTSTRAP | JAVASCRIPT | REACT
              </p>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/sidhantkarbotkar/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-linkedin-square"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
                 {/* GitHub */}
                 <a
                  href="https://github.com/sidhantk283"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-github-square"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
                {/* Insta */}
                <a
                  href="https://www.instagram.com/whozsidhant/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-instagram"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/sidhant.karbotkar/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-facebook-official"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
                {/* Twitter */}
                <a
                  href="https://twitter.com/Sidhant283"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-twitter-square"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
        <Grid className="demo-grid-1">
        {/* <SimpleImageSlider
          width={"90%"}
          height={"20vh"}
          images={this.images}
          showBullets={true}
          showNavs={true}
        /> */}
        </Grid>
      </div>
    );
  }
}

export default Homepage;
