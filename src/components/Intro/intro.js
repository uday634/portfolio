import './intro.css'
import React, { useEffect } from 'react';
import Typed from 'typed.js'; // Import the Typed library
import './intro.css';
import bg from '../../assets/image.png';

const Intro = () => {
    useEffect(() => {
        // Initialize Typed inside useEffect
        var typed = new Typed(".skills", {
            strings: ["Full Stack Developer"], // corrected typo: changed 'string' to 'strings'
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 100,
        });

        // Cleanup function for Typed
        return () => {
            typed.destroy();
        };
    }, []); // Empty dependency array to run the effect only once

    return (
        <section id='intro'>

            <div className='text-box'>
                <h1>
                    <span className='hello'>Hello,</span><br /> I'm Uday Kumar
                </h1>
                <h1>
                    <span className='skills'>Full Stack developer</span>
                </h1>
                <p>I am a Full Stack Web developer with a Passion for Crafting Pixel-Perfect Websites</p>
                <div className='icon-box'>
                    <i className='bx bxl-facebook'></i>
                    <i className='bx bxl-linkedin'></i>
                    <i className='bx bxl-twitter'></i>
                </div>
                <button className='downloadBtn'>Download Cv</button>
                <button className='hairMeBtn'>Hire Me</button>
            </div>
            <div className='img-box'>
                <img src={bg} alt='ProfileImage' draggable="false" />
            </div>
        </section>

    );
};

export default Intro;
