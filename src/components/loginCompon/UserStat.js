import React, { Component } from "react";

//the intent here is that once the login condition has been fulfilled the 
//user infomation with high score will be posted here 
export class UserStat extends Component {

    constructor(props){
        super(props);
    }
     
    render(){
        return (
        
            <div className="base-container">        
              <div className="header">UserStats</div>
               
                   <p>Username :</p><p>silversamurai</p>
                   <p>HighScore :</p><p>1200</p>
                   
                 
                </div>
                
        
           

        )};
}

