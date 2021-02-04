import React from 'react';
import "./App.css";
import { Login, Register, UserStat } from "./components/loginCompon/Index";
import RightSide from "./components/loginCompon/RightSide";
import Tetris from './components/Tetris';


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
      isLoginScreen : true,
      username:'',
      password: '',
      HighScore: 0,
      email: '',
      // user objects and users saved to state
      users: [
        
        {username:'silversamurai',
        password: 'giniro',
        HighScore: 1200,
        email: 'silversamurai@gmail.com'},

        {username:'fruitspunchsamurai',
        password: 'fruits',
        HighScore: 1500,
        email: 'katsura@gmail.com'}
      ]
    };
    this.submitForm = this.submitForm.bind(this);
    
    
  }
  // when submit is pressed it takes what was input from the register or login component and is saved to state
  submitForm = ( username, password , email ) => {
    
    this.setState({ username, password, email })

    console.log("app submit")
   
    console.log(this.state.users)
    // if there is no email its treated as login and checks user state else registers user into state and is pushed.
    if(email == null)
    {
      if(this.state.users[0].username == username && this.state.users[0].password == password) 
         
        {
          let HighScore = this.state.users[0].HighScore
          let em = this.state.users[0].email
          //this.setState({})
          
          
          console.log("login success")

          this.setState({username,password, HighScore, email:em})
          
          console.log(this.state)


          this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
          this.setState(prevState => ({ isLoggedIn: !prevState.isLoggedIn }));
          this.setState(prevState => ({ isLoginScreen: !prevState.isLoginScreen }));
        }
        else if(this.state.users[1].username == username && this.state.users[1].password == password )
        {
          let HighScore = this.state.users[1].HighScore
          let em = this.state.users[1].email
          //this.setState({})
          
          
          console.log("login success")

          this.setState({username,password, HighScore, email:em})
          
          console.log(this.state)
          this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
          this.setState(prevState => ({ isLoggedIn: !prevState.isLoggedIn }));
          this.setState(prevState => ({ isLoginScreen: !prevState.isLoginScreen }));
        }
      else
      {
        console.log(this.state.users[0].username)
        console.log(this.state.users[1].username)
        console.log("not found")
        alert("user not found");
      }
      
    }else 
    {
     
      let HighScore = 0;
      let newUser  = {username, password, email , HighScore};

       this.setState({ users:[...this.state.users, newUser] })
       
       

       this.setState(prevState => ({ isLoggedIn: !prevState.isLoggedIn }));
       this.setState(prevState => ({ isLoginScreen: !prevState.isLoginScreen }));

       setTimeout(() => console.log(this.state), 1000) 
    }

  }
  

  // function not used but is made to simulate login and change the state which control which is shown 
  changeLoggedin(){
      this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
      this.setState(prevState => ({ isLoggedIn: !prevState.isLoggedIn }));
      this.setState(prevState => ({ isLoginScreen: !prevState.isLoginScreen }));
  }
// function is used to simulate logout and change the state which control which is shown 
  changeLoggedOut = () => {
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
    this.setState(prevState => ({ isLoggedIn: !prevState.isLoggedIn }));
    this.setState(prevState => ({ isLoginScreen: !prevState.isLoginScreen }));
}
  
   // this function is called when the rightside blue piece is clicked
   changeState() {

     this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
   
   }

  render(){
    const { isLogginActive,isLoggedIn,isLoginScreen,username,email,password, HighScore,values } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
  
   

     return(


     <div className="App">
         {/*for the board to the right */}
        <div className="nav">
          <h3>Welcome to Redux Tetris</h3>
          
          <BrowserRouter>            
            <Link className="about" to = "AboutPage">About</Link> <Link to = "Instructions">Instructions</Link>           
              <Switch>          
                <Route path='/AboutPage' render={(props) => <AboutPage {...props} />} /> 
                <Route path='/Instructions' render={(props) => <Instructions {...props} />} /> 
              </Switch>
            </BrowserRouter>
   
        </div>
        {/*call the tetris game on the left */}
        <Tetris></Tetris>


         {/*the login/register box */}
        <div className="login">


          <div className="container" >
           
          {isLoggedIn == true && isLogginActive == false && isLoginScreen == false && (   
          
          <UserStat changeLoggedOut={this.changeLoggedOut} user={{username, password, email, HighScore}} 
          
          containerRef={ref => (this.current = ref)} />  )}

            {isLogginActive && isLoginScreen == true && (   <Login  onFormSubmit={this.submitForm} containerRef={ref => (this.current = ref)} />  )}
           
            {!isLogginActive && isLoginScreen == true && (  <Register  onFormSubmit={this.submitForm} containerRef={ref => (this.current = ref)}  />  )}
          </div>
          {isLoggedIn == false && <RightSide current={current} currentActive={currentActive} 
          
          onClick={this.changeState.bind(this)} /> }
        </div>
    </div>
  );
 
}}



export default App;


