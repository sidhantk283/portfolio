import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Activities extends Component{
    render(){
        return(
            <Grid className='resume-content'>
                <Cell col={2} style={{padding:"5px"}}>
                    <p>{this.props.time}</p>
                </Cell>
                <Cell col={10}>
                    <h4 className="resume-content-title">{this.props.title} (<a href={this.props.link} target="_blank"> Certificate </a>)</h4>
                    <p>- {this.props.desc}</p>
                </Cell>
            </Grid>
        );
    }
}

export default Activities;