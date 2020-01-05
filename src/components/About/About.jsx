import React from 'react';
import './About.css';

function About() {
    return (
        <div className="aboutPage">
            <h1 className = "header1About"> Hi, I'm Ade. Nice to meet you</h1>
            <span><p>I believe in creating product that can change the literally change the world and increase our global awareness. My skills are broad: from front end to back end development.I enjoy building sites  and mobile applications from start to finish.</p></span>

            <span><p>I currently spend my days as a design Engineer at PSEG. In my evenings, I'm finding ways to turn thoughtful ideas into responsive websites that allow the user experience the application in the best possible way. On weekends, I cook and enjoy watching the English Premier League.</p></span>
            <span><p>
                I've recently relocated to Seattle, Washington after spending the last 10 years living across the East Coast. Before that, I called Lagos, Nigeria home.</p></span>
            
            <span><p>I'm grateful to have had the opportunity to work in Engineering at PSEG, IBM and Exelon Corporation. Prior, I attended Drexel University at Philadelphia, PA where I completed my Master's degree in Electrical and Computer Engineering and my Bachelor's Degree at Morgan State University in Baltimore, MD where I also studied Electrical and Computer Engineering. </p></span>
            <h2 className = "header2About">What I do</h2>
            <div  className="unorderlist">
            <ul  className="ULabout"> Front-end
                <li>CSS3</li>
                <li>Javascript</li>
                <li>ES6</li>
                <li>React</li>
            </ul>
            <ul className="ULabout"> Back-end
                <li>NodeJS</li>
                <li> Ruby</li>
                 <li>Ruby on Rails</li>
                 <li> APIs</li>
            </ul>
            <ul className="ULabout"> Cloud
                <li>AWS</li>
                <li> Google</li>
                <li>Firebase</li>
            </ul>
            </div>
        </div>
    )
}
export default About