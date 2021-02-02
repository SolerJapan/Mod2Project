# Mod2Project

Mod 2 final project (Tetris with login)

1/29/2021: pause button has been added

# Purpose of the Project

The idea of the project is to create a game that allow one to pass the time playing Tetris in React and Redux 
and also allow for high score based on the user logged in. At base even without login tetris is 
still playable.  

# Documentation Details

# Components / functional Components 

## `in loginCompon folder`

### `index`

this imports the style that was used and applies it to the login and register on the same page
this also exports login and register components to be used later in the main app.



### `Login`

this is the Login component declared and created. This creates and renders the login part with 
the base container, header, form. In the form there is the labels for username and password respectively
followed by the submit button this has been styled by style.css which is shared in the same folder.

### `Register`

this is the Register component declared and created. This creates and renders the login part with 
the base container, header, form. In the form there is the labels for username, email and password respectively
followed by the submit button this has been styled by style.css which is shared in the same folder.

### `RightSide`

This Right side props is meant to serve as a switch this is returned as a prop which
in the final app creates a blue square that is hidden behind the main login box but sticks
out on the right side and serves as a switch in the main app to switch back and forth between login 
and register

## `in Components folder`

### `Cell`
(function)
calls style component StyledCell and the TETROMINOS constant which is the blocks.
the const Cell uses the styling from the StyleCell component and renders the color and shape
based on the shape and React.memo is used so as effeively render.   

visually using export default Cell causes no issue and there is no noticable change
but When a component is wrapped in React.memo(), React renders the component and 
memorizes the result. Before the next render, if the new props are the same,
React reuses the memoized result skipping the next rendering.
This is then exported to Stage.js

### `Functions`

const Cell = ({ type }) => ();

takes the cell based on the cell type and tetromin color to style

### `Display`

This calls the StyledDisplay component and uses the styling to and sets the condition to switch the 
text and display over to the game over text. (this is a function)
This is then exported to Tetris.js

### `Functions`

const Display = ({ gameOver, text }) => ()

calls the styledDisplay css to output  with the stage taken as input to style

### `Stage`

Calls the the StyledStage component and uses the styling to fix the stage width and height
inside the Stage constant(function) this also uses the exported cells to use in a map to set 
the grid in the stage. which is then exported to Tetris.js

### `Functions`

const Stage = ({ stage }) => ()

calls the styledStage css to output  with the stage taken as input to style

### `Tetris`

This is the main area where the main tetris game is run. the calls that are made are 
the stage or field scope and the colison detection from gamehelpers.js, The styled components 
which handle the background and the score, level, and row boards.
The application call the hooks for useInterval, usePlayer, useStage, and useGameStatus`
which sets the rules for the game.
The components that are called for the game is the stage which sets the grid blocks, the 
Display which sets the location for the boards. The Start and Pause buttons are called which
are the callback functions and the styling of the respective buttons.

The following Declarations are made afterward in the main const Tetris   `
const [dropTime, setDropTime] = useState(null);
const [gameOver, setGameOver] = useState(false);
const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
const [score, setScore, rows, setRows, level, setLevel] = useGameStatus( rowsCleared);
these declarations are made to set the droptime, gameover, player stats, the stage, and score information

the movePlayer variable is declared and its purpose is to allow the player to move left or right and checks 
if there is collision.

the keyUp function is not the up arrow but is meant to represent the game continuing its flow 
when the arrow key for movement is released 

the startGame function serves as the way to start the game and reset it as its function
sets the stat such as droptime the score level rows and gameover boolean is set to false

pauseGame function stops the flow of the game and continues it if presses again also hitting down will 
also continue the flow.

we have a drop function which handles the speed at which the block fall which is set based on level  
at the same time the collision detection also checks to make sure the block up top isn't blocked and if it 
is blocked then the game will declare a gameover and change the gameover boolean to true

the dropPlayer is just accelerating block when down is pressed but when that is happening the droptime is set to
null while the down button is pressed when released drop is called to resume the game  

move function make a call to move the player(block) based on which key code is pressed 
for example 37 is the left arrow 39 is the right 40 is the down key and 38 is the up arrow 
the up arrow calls a function to make the block rotate called playerRotate.

finally the styles and divs are called to set the field and board and return them these would be
StyledTetris wrapper from the styledTetrisWrapper and StyledTetris styling component
also there is a check as long as there isnt a game over the display will show the score row and level while 
if the gameover condition is fulfilled it would turn into gameover display being rendered
then the pause and start buttons are rendered. with everything closing Tetris is exported to App.js 
 
 ### `Functions`
 
 const move = ({ keyCode }) => {}
 
 takes the keyboard input to return in this case movement there are 2 keys added for score and 
 level for testing purposes. movePlayer is called for directional inputs movePlayer
 
 const drop = () => {}
 
 the main game function which runs checks for the speed,colision and gameover.
 
 const dropPlayer = () => {} 
 
 this is run when the down button is pressed and first stops the drop until the button is released
 then drop is called again to resume timer
 
 const movePlayer = dir => {}
 
 this is called to move the player piece left or right
 
 const startGame = () => {}
 
 calls all the states to set the stage, the drop speed the player, the 
 set score,level, and rows to 0 and set the gameOver to false 
 as such this can be also considered a reset

 const pauseGame = () => {}
 
 sets the dropTime to null when pressed when drop is active. else will make the piece
 move again with speed based on the current level.
 
 useInterval (callback)
 
 as a exported callback this sets up the games delay and interval ticks 
 with another function that is useEffect which is a react function
 
 
 
# Styled Components 

## `in style folder`

### `StyledCell`

contains the CSS to be exported named const Styledcell
this has the colors and border with the width set to auto and the 
colors set for the border and background

### `StyledDisplay`

contains the CSS to be exported named const StyledDisplay
this has the settings for the mini bars that is set for each of the 
display for the score, rows, and level. This includes the the height, width,
position, colors, as well as the additional coloring for the gameover setting

### `StyledGameOver`

Supposedly is meant to be the separate Css for the game over display for the 
tetris app but this has no use in the program and as such is just left alone as 
in the program as reference and has no functional use.

### `StyledStage`

contains the CSS to be exported named const StyledStage
this has the settings to create the stage with the reapeating cells among height and
width in the stage component along with the position and color.

### `StyledTetris`

contains the CSS to be exported named const StyledTetrisWrapper and StyledTetris.
The settings to style the background and scores boards positioning respectively 
a background image is declared here as well.

## `in components folder`

### `PauseButton
`
contains the CSS to be used called const StyledPause button

further below const PauseButton is called as a function and takes the callback as the
input which is exported and called into the tetris component.

### `StartButton`

contains the CSS to be used called const StyledStart button

further below const StyledStart is called as a function and takes the callback as the
input which is exported and called into the tetris component.

## hooks
 
### `useGameStatus` 

 the following constants are declared 
 const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(0);
  const linePoints = [40, 100, 300, 1200];
  
  calcScore is declared as a function the function at base is made to calculate and
  set the score and the rows based on rows cleared and then returns the results

### `Functions`

const calcScore = useCallback(() => {}

a callback is used and this ultimately sets the score and rows based on what was cleared in 
game such as score based on how many rows cleared 

### `useInterval` 

the function useInterval is created and called and its purpose is to create ticks and time and 
delay in the game and is exported 

### `usePlayer` 

imports the TETROMINOS and randomTeromino function from the tetrominos file
as well as the stage_width and checkCollision from gameHelpers file

creates a function usePlayer to be exported as a function 
it starts off with declaring the player as the TETROMINOS is called to set the player via useState
while coloided is set to ralse

the function rotate is declared with matrix and the value for direction 

the function playerRotate is declared and this function the reason the blocks persist once a piece colides
with with a block or a border the json records it to the instance and the block position is cloned and left there 
until the row is completed

the function updatePlayerPos is what updates player pos as time ticks

resetPlayer uses a callback to set the start position for the next piece and calls another 
tetromino block 

every function is then returned from this function/hook.

### `Functions`

 rotate(matrix, dir) {}

 responsible for the rotation.

 playerRotate(stage, dir) {}
 this function sets a cloned player constant and uses json parse to save a clone of the piece to use 
 to update the stage which is how the tetris pieces remain whichever position and rotation its set at.
 
 updatePlayerPos = ({ x, y, collided }) => {}

 everytime this is called the player position is saved and updated also updates 
 the colision if its colided with something
 
 
 
 resetPlayer = useCallback(() => {}

 resets player position by seting the player position and chosing a random tetris piece as well 
 as reseting the colision boolean

### `useStage` 

imports the createStage from gameHelpers file to use to create the stage with
  const [stage, setStage] = useState(createStage());
  const [rowsCleared, setRowsCleared] = useState(0);
  
inside of the useStage function that is to be exported
inside of the useEffect which meant to update the visuals and stage after everything has 
been rendered.  

function updateStage declared which is used to flush the stage and 
clear the rows with newStage declared then new block is pulled and moved into 
the stage and descents in the newStage.
when the piece colides with the border or piece newStage is called and the player position
is reset.

set stage is continuously called to keep updating then finally the
stage, setStage and the rowsCleared is returned.   

 ### `Functions`

 updateStage = prevStage => {}

 this saves the update to the current changes in the stage like what pieces are where 
 
 if there is a colision it reset the player piece and also sweeps the row if its filled
 along with updating the stage
 
# pages

## AboutPage

This page is set in browser router in and via link it reached in the main
App.js in the link this is one the options to switch back and forth between this and the instuctions
The main purpose is to present a link to show how to create the game

## Instruction

This page is set in browser router in and via link it reached in the main
App.js in the link this is one the options to switch back and forth between this and the about page
The main purpose is to present a link to show how to create the game

# App.js

The main app where the program in all is being run
login and register components care called here as well as the rightSide
as well as the Tetris (game) component.

the browserRouter, Switch, Route, and Link are imported from react-router-dom
the AboutPage and Instructions are both imported from the pages folder

the app component is declared with propss and an internal state such as isLogginActive:true
which is the switch for login and register 

changeState() is the part that handles switch the states back and forth between login and register

inside the rendering 
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
are declarations for the states and the buttons as based the current active state

below the main program is rendered with the main class being App
followed by the nav class with the css has been moved to the right side of the page to
properly cover the changing information with BrowserRouter, Link, Switch and Route inside

Afterward the main tetris component is called to cover the main field on the left and center 
side of the screen.

on the bottom right is the login class with the class container that holds both
the login and register pieces with the RightSide being called afterward to cover the switch 
on click.    


# gameHelpers.js

The Stage Width and Height is declared and exported as 12 and 20 respectivly 
these are meant to be the fixed space of the board

createStage constant os created and exported and creates the board with the 
Height and Width just set.

checkCollision function is declared and takes the player and stage as well as the x and y movement
positions are taken and mathmatical statements in the code is used to check and compare for colision 
and also to make sure the games block do not go out of bounds



# tetrominos.js

declares TETROMINOS to be exported and declares the shapes and colors based on text and blocks 0 and the 
letter in question for the block pieces.

randomTetromino is also declared but as a function to be exported and has tetrominos declared as a constant which
will be used and passed as string.

another constant randTetromino using the string previosly declared to randomly draw one of the letters
all this is returned to where its called such as the app.

# index.js

ordinarilly one would not need to do anything once its created at base but the 
the app rendering needs to be as follows as because if left alone the application would take the input
as double the input
ReactDOM.render(
    <App />,
  document.getElementById('root')
);


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
