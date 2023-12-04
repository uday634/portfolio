import React from "react";
import './About.css'
import htmlLogo from '../../img/html.png'
import cssLogo from '../../img/css.png'
import jsLogo from '../../img/javascript.png'
import tsLogo from '../../img/typescript.png'
import reactLogo from '../../img/react.png'
import expressLogo from '../../img/express.png'
import nodejsLogo from '../../img/nodejs.png'
import mongodbLogo from '../../img/mongodb.png'
const About = () => {
    return (
        <div className="inner">
            <div className="header">
                <h1>My Skills</h1>
            </div>
            <div className="container">
                <div className="skill-box">
                    <div className="skill-title">
                        <div className="img">
                            <img src={htmlLogo} alt="html" className="skill-icon"/>
                        </div>
                        <h3>HTML 5</h3>
                    </div>
                </div>
                <div className="skill-box">
                    <div className="skill-title">
                        <div className="img">
                            <img src={cssLogo} alt="css" className="skill-icon"/>
                        </div>
                        <h3>CSS</h3>
                    </div>
                </div>
                <div className="skill-box">
                    <div className="skill-title">
                        <div className="img">
                            <img src={jsLogo} alt="javascript" className="skill-icon"/>
                        </div>
                        <h3>JavaScript</h3>
                    </div>
                </div>
                <div className="skill-box">
                    <div className="skill-title">
                        <div className="img">
                            <img src={reactLogo} alt="react" className="skill-icon"/>
                        </div>
                        <h3>React.js</h3>
                    </div>
                </div>
                <div className="skill-box">
                    <div className="skill-title">
                        <div className="img">
                            <img src={expressLogo} alt="express" className="skill-icon"/>
                        </div>
                        <h3>Express.js</h3>
                    </div>
                </div>
                <div className="skill-box">
                    <div className="skill-title">
                        <div className="img">
                            <img src={tsLogo} alt="typescript" className="skill-icon"/>
                        </div>
                        <h3>TypeScript</h3>
                    </div>
                </div>
                <div className="skill-box">
                    <div className="skill-title">
                        <div className="img">
                            <img src={nodejsLogo} alt="nodejs" className="skill-icon"/>
                        </div>
                        <h3>node.js</h3>
                    </div>
                </div>
                <div className="skill-box">
                    <div className="skill-title">
                        <div className="img">
                            <img src={mongodbLogo} alt="mongodb" className="skill-icon"/>
                        </div>
                        <h3>mongoDB</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;