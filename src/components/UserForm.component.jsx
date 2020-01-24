import React, { Component } from 'react'
import UserDetailsForm from './UserDetailsForm.component';
import PersonalDetailsForm from './PersonalDetailsForm.component';
import Confirm from './Confirm.component';
import Success from './Success.component'
export default class UserForm extends Component {
    
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        country: '',
        city:'',
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
        console.log(input);
        this.setState({ [input]: e.target.value });
      };
    
    render() {
        const { step, firstName, lastName, email, occupation, city, bio } = this.state;
        const values = { firstName, lastName, email, occupation, city, bio };
    
        switch(step){
            case 1:
                return <UserDetailsForm 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}/>
            case 2: 
                return <PersonalDetailsForm 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}/> 
            case 3: 
            return <Confirm
                 nextStep={this.nextStep}
                 prevStep={this.prevStep}
                 values={values}
            />
            case 4: 
                return <Success
                        values= {values}
                />
            default :
                return <h1>No form</h1>
        }
    }
}
