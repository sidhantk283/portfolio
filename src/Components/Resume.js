import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

class Resume extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    return (
      <div>
        <Grid className="resume-gird">
          <Cell col={4}>
            <Grid>
              <img
                style={{width:'250px',height:'auto', marginLeft:'auto',marginRight:'auto',display:'block'}}
                src="images/passport.jpeg"
                alt="avatar"
              />
            </Grid>

            <h2 style={{ paddingTop: "1em",fontWeight:'bolder' }}>Sidhant Karbotkar</h2>
            <h3 className="grdtext" style={{ color: "grey",fontWeight:'bolder' }}>Web Developer</h3>
            <hr style={{ borderTop: "2px solid #833fb2", width: "50%" }} />
            <p style={{ textAlign: "justify" }}>
              Sidhant here, student of Master of Compuer Application final year at Goa University. Solving real life problems using computers is my thing.
            </p>
            <hr style={{ borderTop: "2px solid #833fb2", width: "50%" }} />
            <h5 style={{fontWeight:'bolder'}}>Address</h5>
            <p>Mayem Bicholim Goa - 403504</p>
            <h5 style={{fontWeight:'bolder'}}>Phone</h5>
            <p>+91 7066573229</p>
            <h5 style={{fontWeight:'bolder'}}>Email</h5>
            <p>sidhantk283@gmail.com</p>
            <h5 style={{fontWeight:'bolder'}}>Download CV</h5>
            <i class="fas fa-file-pdf"></i>
            <a
              className="grdtext"
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/16o7xCJ-dY4C4qu55gGBJngOQIL9HmBRs/view?usp=sharing"
            >
            My Updated CV
            </a>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>EDUCATION</h2>
            <Education
              startYear={2017}
              endYear={2020}
              schoolName={"Daffodil International University"}
              degreeName={"Bsc In Software Engineering"}
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>EXPERIENCE</h2>
            <Experience
              startYear={"December 2020"}
              endYear={"January 2020"}
              jobName={"Internee"}
              jobDesc={
                "That was a part-time Internee. And I learnt lot of tech things from this company I now had a chance to test my knowledge in the real world through an internship."
              }
            />
            <Experience
              startYear={"Spring 2019"}
              endYear={"Fall 2019"}
              jobName={"Trainer For Junior Solver"}
              jobDesc={"Teach C Programming Language 1st year students"}
            />
            <Experience
              startYear={"Spring 2020"}
              endYear={"Summer 2020"}
              jobName={"ACM Problem Setter"}
              jobDesc={
                "Problem setter on DIU Take OFF Programming Contest And Several others contest on Daffodil"
              }
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill={"HTML/CSS"} progress={80} />
            <Skills skill={"ReactJS"} progress={60} />
            <Skills skill={"Angular"} progress={70} />
            <Skills skill={"C#"} progress={90} />
            <Skills skill={"Asp .Net Core"} progress={90} />
            <Skills skill={"SQL Server"} progress={80} />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Achievments</h2>
            <h6>6th at SWE Junior Programming Contest (03/2019)</h6>
            <h6>9th Position at DIU TakeOff Programming Contest (04/2017)</h6>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
