import React, { Component } from "react";

//this is for the login part of the login box
export class Login extends Component {

    constructor(props){
        super(props);
    }
     
    render(){
        return (
        
            <div className="base-container">        
              <div className="header">Login</div>
                <form className="form">
                   <label htmlFor="username">Username: </label>
                   <input type="text" name="username" placeholder="username"/>
                   <label htmlFor="password">Password: </label>
                   <input type="text" name="password" placeholder="password"/>
                   <button type ="button" className="submitbtn" >Login</button>
                </form>
                </div>
                
        
           

        )};
}

