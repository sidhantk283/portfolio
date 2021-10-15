import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body" style={{backgroundImage: "url(images/bg1.jpg)"}}>
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>SIDHANT KARBOTKAR</h2>
            <img style={{width:'250px', height: 'auto'}} src="images/passport.jpeg" alt="avatar" />
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
            </p>
          </Cell>
          <Cell col={6}>
              <h2>Contact Me</h2>
              <hr />
              <div className="contact-list">
                  
              <List>
                  <ListItem>
                      <ListItemContent style={{fontSize: '25px'}}><i className="fa fa-phone-square" aria-hidden='true'></i>+91 7066573229</ListItemContent>
                  </ListItem>
                  <ListItem>
                      <ListItemContent style={{fontSize: '25px'}}><i className="fa fa-envelope" aria-hidden='true'></i>sidhantk283@gmail.com</ListItemContent>
                  </ListItem>
              </List>
              </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
