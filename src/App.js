import React from "react";
import "./App.css";
import { Login, Register } from "./components/loginCompon/index";
import RightSide from "./components/loginCompon/RightSide";
import Tetris from './components/Tetris';


import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import AboutPage from "./Pages/AboutPage";
import Projector from "./Pages/Projector";


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isLogginActive: true
    };
  }
  
  

  
  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
  }
  // changes state between login and register
  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }

  render(){
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
  

     return(


     <div className="App">
         {/*for the board to the right */}
        <div className="nav">
          <h3>Welcome to Redux Tetris</h3>
          <BrowserRouter>            
            <Link className="about" to = "AboutPage">About</Link> <Link to = "Projector">Instructions</Link>           
            <Switch>          
             <Route path='/AboutPage' render={(props) => <AboutPage {...props} />} /> 
             <Route path='/Projector' render={(props) => <Projector {...props} />} /> 
            </Switch>
          </BrowserRouter>
        </div>
        {/*call the tetris game */}
        <Tetris></Tetris>

         {/*the login/register box */}
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Login containerRef={ref => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <Register containerRef={ref => (this.current = ref)} />
            )}
          </div>
          <RightSide current={current} currentActive={currentActive} 
          containerRef={ ref => (this.rightSide = ref)}
          onClick={this.changeState.bind(this)} />
        </div>
    </div>
  );
}}



export default App;


