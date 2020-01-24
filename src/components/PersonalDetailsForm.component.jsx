import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class PersonalDetailsForm extends Component {
    
    conitnue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    render() {

        const { values, handleChange, nextStep, prevStep } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Personal Details"/>
                    <TextField hintText="Your Occupation" floatingLabelText="Occupation" onChange={handleChange('occupation')} defaultValue={values.occupation}/><br/>
                    <TextField hintText="Your Country" floatingLabelText="Country" onChange={handleChange('country')} defaultValue={values.country}/><br/>
                    <TextField hintText="Your City" floatingLabelText="City" onChange={handleChange('city')} defaultValue={values.city}/><br/>
                    <TextField hintText="Bio" floatingLabelText="Bio" onChange={handleChange('bio')} defaultValue={values.bio}/><br/>
                    <RaisedButton label="next" primary={true} style={styles.button} onClick={nextStep}/><br/>
                    <RaisedButton label="Previous" primary={false} style={styles.button} onClick={prevStep}/>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}
