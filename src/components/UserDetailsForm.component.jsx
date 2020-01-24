import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class UserDetailsForm extends Component {
    
    conitnue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    render() {

        const { values, handleChange } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User Details"/>
                    <TextField hintText="First Name" floatingLabelText="First Name" onChange={handleChange} defaultValue={values.firstName}/><br/>
                    <TextField hintText="Last Name" floatingLabelText="Last Name" onChange={handleChange} defaultValue={values.lastName}/><br/>
                    <TextField hintText="Email Address" floatingLabelText="Email" onChange={handleChange} defaultValue={values.email}/><br/>

                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
