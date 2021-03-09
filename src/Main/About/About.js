import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
min-height: 75vh;
`
function About() {
    return (
        <StyledContainer>
           <div>
            <h3 id="front-end-developer-students-at-kyh-stockholm">Front-end Developer students at KYH Stockholm</h3>
            <p id="we-are-building-a-platform-in-react-js-">We are building a platform in React.js.</p>
            <p><a href="http://www.rp-fenno.surge.sh">Demo</a></p>
            <h3 id="languages-and-tools">Languages and tools</h3>
            <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>MongoDB / FireBase</li>
                <li>Node.js</li>
                <li>Git</li>
                <li>Figma</li>
                <li>Photoshop</li>
            </ul>
            <h3 id="we-love">We Love</h3>
            <ul>
                <li>Coding</li>
                <li>Exercise</li>
                <li>Gaming</li>
                <li>Family time</li>
            </ul>
            <h3 id="what-is-in-the-scope-right-now-">What is in the scope right now?</h3>
            <ul>
                <li>🔭 We are working on schoolProject.</li>
                <li>🌱 Learning new technologys </li>
            </ul>
            <h3 id="whant-us-to-create-you-a-project-">Whant us to create you a project?</h3>
            <ul>
                <li>💬 What can we do for you?</li>
            </ul>
            <h4 id="you-can-reach-us-at-">You can reach us at:</h4>
            <p>📫 <a style={ {textDecoration: 'none', color: '#33bccc'} } href='mailto:fadil.alfarhan@gmail.com'>Fadil.alfarhan@gmail.com</a></p>
           </div>
        </StyledContainer>
    )
}

export default About
