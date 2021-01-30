import React from "react";

export class Register extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div className="base-container" ref={this.props.containerRef}>
          
          <div className="header">Register</div>
            <form className="form">
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" placeholder="username" />  

                <label htmlFor="email">Email: </label>
                <input type="text" name="email" placeholder="email" />    
                
                <label htmlFor="password">Password: </label>
                <input type="text" name="password" placeholder="password" />
                <button type="button" className="submitbtn">Register</button>
             </form>
          </div>
      );
    }
  }

 