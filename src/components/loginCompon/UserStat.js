import React, { Component } from "react";

//the intent here is that once the login condition has been fulfilled the 
//user infomation with high score will be posted here 
export class UserStat extends Component {

    constructor(props){
        super(props);
    }
     
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

