import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
//import Experience from "./Experience";
import Activities from "./Activities";
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
          {/* Experience
            <Experience
              startYear={""}
              endYear={""}
              jobName={""}
              jobDesc={""}
            /> */}

          <Cell className="resume-right-col" col={8}>
            {/* Activities */}
            <h2>ACTIVITIES</h2>
            <Activities
              time={"July 2021"}
              title={"UI/UX (Javascript) Virtual Internship"}
              link={"https://drive.google.com/file/d/1gwUUbbzypc5zGrNLutUpfk5t3mf41J6n/view?usp=sharing"}
              desc={"Suven Consultants & Technology Pvt. Ltd."}
            />

            <Activities
              time={"January 2021"}
              title={"UI/UX (Html5 + CSS3) Virtual Internship"}
              link={"https://drive.google.com/file/d/1aS9COHfOa17ZH52--MPO85fnzQLuyUCs/view?usp=sharing"}
              desc={"Suven Consultants & Technology Pvt. Ltd."}
            />
            
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>TRAININGS/ COURSES</h2>
            <Activities
              time={"April 2018"}
              title={"Computer Hardware, Troubleshoot and Maintenance"}
              link={"https://drive.google.com/file/d/1y4YguXGrMF6ak6CBOTh-Y1GGWpRtKUzB/view?usp=sharing"}
              desc={"Dnyanprassarak Mandal's College, Assagao"}
            />

            <Activities
              time={"Mar 2018"}
              title={"Python"}
              link={"https://drive.google.com/file/d/1yB0ByXYe0yzN_i25QSxu7LC_KwCu1EKx/view?usp=sharing"}
              desc={"Spoken Tutorial, IIT Bombay"}
            />

            <Activities
              time={"Mar 2017"}
              title={"Gimp Image Editing Software"}
              link={"https://drive.google.com/file/d/1y3QUHGvh5UhA6fsN-TVyjpex-y0IDj16/view?usp=sharing"}
              desc={"Spoken Tutorial, IIT Bombay"}
            />

            <Activities
              time={"Jan 2017"}
              title={"C programming"}
              link={"https://drive.google.com/file/d/1xxw-FYKYlBPOaKjSvsGTpeA2tWGfavvO/view?usp=sharing"}
              desc={"Spoken Tutorial, IIT Bombay"}
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />
            
            {/* Education */}
            <h2>EDUCATION</h2>
            <Education
              startYear={2019}
              endYear={'Present'}
              schoolName={"Goa University, Panjim, Goa"}
              degreeName={"Master of Computer Applications"}
              class={"Appearing"}
            />
            <Education
              startYear={2016}
              endYear={2019}
              schoolName={"Dnyanprassarak Mandal's College, Assagao, Goa"}
              degreeName={"BSc In Computer Science"}
              class={"Distinction"}
            />
            <Education
              startYear={2014}
              endYear={2016}
              schoolName={"Govt. HSSc, Sanquelim, Goa"}
              degreeName={"HSSc In Science"}
              class={"First Class"}
            />

            {/* skills */}
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>SKILLS</h2>
            <Skills skill={"HTML/CSS"} progress={90} />
            <Skills skill={"JavaScript"} progress={80} />
            <Skills skill={"React.js"} progress={60} />
            <Skills skill={"Angular"} progress={40} />
            <Skills skill={"Python"} progress={50} />
            <Skills skill={"Laravel"} progress={90} />
            <Skills skill={"Node.js"} progress={30} />
            <Skills skill={"Unity3D"} progress={80} />

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>ACHIEVEMENTS</h2>
            <h6>First Place for Gitty Games - Multi-game Android App ( <a style={{textDecoration:'none'}} href="https://drive.google.com/file/d/1y2tCEpV7On9Js-zyAWsY_vDZEcvr-ObI/view?usp=sharing" target="_blank">Certificate</a> )</h6>
            <p>- at Science Expo held in DMC's College, Assagao</p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
