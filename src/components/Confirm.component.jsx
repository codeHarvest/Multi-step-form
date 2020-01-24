import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export default class Confirm extends Component {
    
    render() {
        const { values : { firstName, lastName, email, occupation, country, city, bio }, nextStep, prevStep } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm Details"/>
                    <List>
                        <ListItem 
                        primaryText="First Name" 
                        secondaryText={firstName}/>
                        <ListItem 
                        primaryText="Last Name" 
                        secondaryText={lastName}/>
                        <ListItem 
                        primaryText="Your Email" 
                        secondaryText={email}/>
                        <ListItem 
                        primaryText="Your Occupation" 
                        secondaryText={occupation}/>
                        <ListItem 
                        primaryText="Your Country" 
                        secondaryText={country}/>
                        <ListItem 
                        primaryText="Your City" 
                        secondaryText={city}/>
                        <ListItem 
                        primaryText="Your Bio" 
                        secondaryText={bio}/>
                    </List>
                    <RaisedButton 
                    label="Confirm And Continue" 
                    primary={true} 
                    style={styles.button} 
                    onClick={nextStep}/>
                    <RaisedButton 
                    label="Go Back" 
                    primary={false} 
                    style={styles.button} 
                    onClick={prevStep}/>
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
