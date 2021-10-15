import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component{
    render(){
        return(
            <Grid className='resume-content'>
                <Cell col={2} style={{padding:"5px"}}>
                <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={7}>
                    <h4 className="resume-content-title">{this.props.degreeName}</h4>
                    <p>{this.props.schoolName}</p>
                </Cell>
                <Cell col={3} style={{padding:"5px"}}>
                    <p>{this.props.class}</p>
                </Cell>
            </Grid>
        );
    }
}

export default Education;