import React, { Component } from "react";

class Aboutme extends Component {
  render() {
    return (
      <div style={{backgroundImage: "url(images/bg1.jpg)", height:'100%',paddingTop:'100px'}}
      >
        <div style={{ textAlign: "center", marginLeft: 'auto', color: '#fff', marginRight: 'auto', width: '60%', background: 'gray', padding: '20px',borderRadius:'20px'}}>
          <img
            style={{borderRadius:'50%',width:'20%',height:'auto'}}
            src="images/profile.jpg"
            alt="sidhant-profile-pic"
          />
          <h1 style={{fontSize: '50px'}}>SIDHANT KARBOTKAR</h1>
          <p style={{textAlign: 'justify'}}>
            helloo
          </p>
        </div>
      </div>
    );
  }
}

export default Aboutme;
