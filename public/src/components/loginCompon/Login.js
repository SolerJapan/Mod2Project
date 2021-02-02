import React, { Component } from "react";

//this is for the login part of the login box
// this is shown by default
export class Login extends Component {

    constructor(props){
        super(props);

        this.state = { 
          username: '',
          password: ''        
        };
                    
        this.submitForm = this.submitForm.bind(this);
        this.onChange = this.onChange.bind(this);
      }
    
    submitForm(event) {
      event.preventDefault();
  
      // Grab the input that the user typed in
      const username = document.querySelector("#username");
      const password = document.querySelector("#password");
  
     /// this.props.addThis(username.value)
    //  this.props.addThis(email.value)
     // this.props.addThis(password.value)
        console.log('submit');
        console.log(event);
        console.log(username);
        console.log(password);
    }

    onChange(event) {
      // Will capture the input value on the <input> tag and save into state 
      // Once the form is submitted, the setstate on the function will reset the value to an empty string
  
      this.setState({[event.target.name]: event.target.value})
     
    }
    
    render(){

       
    

        return (
        
            <div className="base-container">        
              <div className="header">Login</div>
                <form className="form" onSubmit={this.submitForm} >
                   <label htmlFor="username">Username: </label>
                   <input type="text" id="username" name="username"  
                    onChange={this.onChange} value={this.state.username} placeholder="username"/>
                   <label htmlFor="password">Password: </label>
                   <input type="text" name="password" id="password" 
                    onChange={this.onChange} value={this.state.password} placeholder="password"/>
                   <button type ="submit" className="submitbtn" >Login</button>
                </form>
                </div>
                
        
           

        )};
}

