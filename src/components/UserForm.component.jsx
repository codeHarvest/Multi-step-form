import React, { Component } from 'react'
import UserDetailsForm from './UserDetailsForm.component';

export default class UserForm extends Component {
    
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        bio: ''
    }

    nextStep = () => {
        const { step } = this.state;

        this.setState({ 
            step : step + 1
         });
    }
    

    prevStep = () => {
        const { step } = this.state;

        this.setState({ 
            step : step - 1
         });
    }

    handleChange = input => e => {
        this.setState({ [input] : e.target.value })
    }

    render() {

        const { step , firstName, lastName, email, occupation, bio } = this.state;
        const values = {step , firstName, lastName, email, occupation, bio }; 

        switch(step){
            case 1:
                return (
                    <UserDetailsForm nextStep={this.nextStep} values={values} handleChange={this.handleChange}/>
                )
            case 2: 
                return <h1>FormPeronalDetails</h1> 
            case 3: 
            return <h1>Confirm</h1>
            case 2: 
                return <h1>Success</h1>  
        }
    }
}
