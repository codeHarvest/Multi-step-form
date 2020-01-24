import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class UserDetailsForm extends Component {
    
    render() {
        const { values, handleChange, nextStep } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User Details"/>
                    <TextField 
                    hintText="First Name" 
                    floatingLabelText="First Name" 
                    onChange={handleChange('firstName')} 
                    defaultValue={values.firstName}/><br/>
                    <TextField 
                    hintText="Last Name" 
                    floatingLabelText="Last Name" 
                    onChange={handleChange('lastName')} 
                    defaultValue={values.lastName}/><br/>
                    <TextField 
                    hintText="Email Address" 
                    floatingLabelText="Email" 
                    onChange={handleChange('email')} 
                    defaultValue={values.email}/><br/>
                    <RaisedButton 
                    label="Next" 
                    primary={true} 
                    style={styles.button} 
                    onClick={nextStep}/>
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
