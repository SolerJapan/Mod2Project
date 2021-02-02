import React, { Component } from "react";

//the operation here is that once the login condition has been fulfilled the 
//user infomation with high score will be posted here or new username will be posted but score is 0
export class UserStat extends Component {

    constructor(props){
        super(props);
    }
     // this handles the logout
    submitForm = (event) => {

         console.log(this.props);
         this.props.changeLoggedOut();
      }

    render(){

        console.log(this.props);

     
        return (
        
            <div className="base-container">        
              <div className="header">UserStats</div>
                
                   <p>Username :</p>{this.props.user.username}
                   <p>HighScore :</p>{this.props.user.HighScore}   
                   <p></p>
                   <button onClick={this.submitForm}  className="submitbtn" >LogOut</button>
                    
                </div>
                
        
           

        )};
}

