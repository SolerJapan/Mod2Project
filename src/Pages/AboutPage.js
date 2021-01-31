import React from 'react';
import { Link } from 'react-router-dom'
//this part will post the link to the video that teaches how to create this.
const AboutPage = () => {
    return (
        <>
            <Link to='/'> Remove </Link>
            <br /><br /> <h3>About</h3>
            <p>for deatails on how to build this applcation refer to</p>
            <a href="https://www.youtube.com/watch?v=ZGOaCxX8HIU&t=5419s">Build Tetris in React and Redux</a>
        </>
    )
}

export default AboutPage;