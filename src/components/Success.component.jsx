import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export default class Success extends Component {
    
    render() {
        const { firstName, lastName } = this.props.values;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm Details"/>
                    <h1>Hi <b>{firstName}</b> <b>{ lastName}</b> info has been successfully submitted.</h1>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

