import React from "react";

// this is for the registration part of the login box
// the the switch on the right side is pressed it switches to register below
export class Register extends React.Component {
    
  
  constructor(props) {
      super(props);
      
      this.state = { 
        username: '',
        email: '',
        password: ''        
      };
                  
      this.submitForm = this.submitForm.bind(this);
      this.onChange = this.onChange.bind(this);
    }
    

    submitForm(event) {
      event.preventDefault();
  
      // Grab the input that the user typed in
      const username = document.querySelector("#username");
      const email = document.querySelector("#email");
      const password = document.querySelector("#password");
  
     /// this.props.addThis(username.value)
    //  this.props.addThis(email.value)
     // this.props.addThis(password.value)
       console.log('submit');
       console.log(event);
       console.log(username);
       console.log(email);
       console.log(password);
    }

    onChange(event) {
      // Will capture the input value on the <input> tag and save into state 
      // Once the form is submitted, the setstate on the function will reset the value to an empty string
  
      this.setState({[event.target.name]: event.target.value})
     
    }

    render() {


      //var RegObject = JSON.parse(myjsonstring);
     {/*value={this.state.user} onChange={Change}*/}
     {/* value={this.state.email} onChange={Change}*/} 
     {/*value={this.state.pass} onChange={Change}*/}
      return (
        <div className="base-container" ref={this.props.containerRef}>
          
          <div className="header">Register</div>
            <form className="form" onSubmit={this.submitForm} >
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" name="username" onChange={this.onChange} 
                 value={this.state.username} placeholder="username" />  

                <label htmlFor="email">Email: </label>
                <input type="text" id="email" name="email" onChange={this.onChange} 
                value={this.state.email} placeholder="email" />    
                
                <label htmlFor="password">Password: </label>
                <input type="text" id="password" name="password"  onChange={this.onChange} 
                value={this.state.password} placeholder="password" />
                <button type="submit" className="submitbtn" >Register</button>
             </form>
          </div>
      );
    }
  }

 