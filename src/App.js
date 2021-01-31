import React, { useState } from 'react';
import "./App.css";
import { Login, Register, UserStat } from "./components/loginCompon/Index";
import RightSide from "./components/loginCompon/RightSide";
import Tetris from './components/Tetris';
import { UserContext } from './hooks/userContext';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import AboutPage from "./Pages/AboutPage";
import Instructions from "./Pages/Instructions";






class App extends React.Component {
// constructor to hold state information
  constructor(props){
    super(props);
    this.state = {
      isLogginActive: true,
      isLoggedIn : false,
      isLoginScreen : true
    };
    this.submitForm = this.submitForm.bind(this);
    
  }
  
  submitForm(values) {
    values.preventDefault()
    this.setState({ values })
  }
  




  
  // componentDidMount() {
  //   //Add .right by default
  //   this.rightSide.classList.add("right");
  // }
  // changes state between login and register
   changeState() {
  //   const { isLogginActive } = this.state;

  //   if (isLogginActive) {
  //     this.rightSide.classList.remove("right");
  //     this.rightSide.classList.add("left");
  //   } else {
  //     this.rightSide.classList.remove("left");
  //     this.rightSide.classList.add("right");
  //   }
     this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
   
   }

  render(){
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
    const { isLoggedIn } = this.state;
    const { isLoginScreen } = this.state;

    const { values } = this.state;

    const user = { username: 'silversamurai', password: 'ginko' , HighScore: 2500}
   

     return(


     <div className="App">
         {/*for the board to the right */}
        <div className="nav">
          <h3>Welcome to Redux Tetris</h3>
          <UserContext.Provider value = ''>
          <BrowserRouter>            
            <Link className="about" to = "AboutPage">About</Link> <Link to = "Instructions">Instructions</Link>           
              <Switch>          
                <Route path='/AboutPage' render={(props) => <AboutPage {...props} />} /> 
                <Route path='/Instructions' render={(props) => <Instructions {...props} />} /> 
              </Switch>
            </BrowserRouter>
          </UserContext.Provider>
        </div>
        {/*call the tetris game on the left */}
        <Tetris></Tetris>


         {/*the login/register box */}
        <div className="login">


          <div className="container" ref={ref => (this.container = ref)}>
           
          {isLoggedIn == true && isLogginActive == false && isLoginScreen == false && (   <UserStat containerRef={ref => (this.current = ref)} />  )}

            {isLogginActive && isLoginScreen == true && (   <Login  onFormSubmit={this.submitForm} containerRef={ref => (this.current = ref)} />  )}
           
            {!isLogginActive && isLoginScreen == true && (  <Register  onFormSubmit={this.submitForm}  containerRef={ref => (this.current = ref)} />  )}
          </div>
          <RightSide current={current} currentActive={currentActive} 
          containerRef={ ref => (this.rightSide = ref)}
          onClick={this.changeState.bind(this)} />
        </div>
        <div>
          Submitted form values : <br/>
          username: {values && values.username} <br/>
          email: {values && values.email}
          password: {values && values.password}
        </div>
    </div>
  );
 
}}



export default App;


