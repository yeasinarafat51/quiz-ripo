import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='about'>
            <h1>1.what  parpas of react router</h1>
            <p> React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            <h1>2. how does context api work</h1>
            <p>Answer:The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            <h1>3.what useref does</h1>
            <p>Answer:useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.</p>
            
        </div>
    );
};

export default About;