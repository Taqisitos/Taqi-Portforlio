import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Intro.css';

// Ext components
import Image from 'react-bootstrap/Image';

// Int components
import me from "../assets/me.png";
import insta from "../assets/insta.jpeg";
import linkedIn from "../assets/linked-in.png";
import gitHub from "../assets/github.png";
import gmail from "../assets/gmail.jpeg";

function Intro() {
    return (
        <>
            <div className='intro-grid'>

                
                    <img className='me' src={me}/>
                

                <div className='intro-socials'>

                    <div className='imTaqi'>
                        <p>
                            I'm Taqi.
                        </p>
                        <p>
                            Welcome to My Portfoio.
                        </p>
                    </div>

                    <div className='socials'>
                      
                            <a href="https://www.instagram.com/taqisitos/" target="_blank" rel="noopener noreferrer">
                                <Image className='social-icon' src={insta} roundedCircle/>
                            </a>
                            <a href="https://www.linkedin.com/in/taqi-hossain/" target="_blank" rel="noopener noreferrer">
                                <Image className='social-icon' src={linkedIn} roundedCircle/>
                            </a>
                            <a href="https://www.github.com/Taqisitos/" target="_blank" rel="noopener noreferrer">
                                <Image className='social-icon' src={gitHub} roundedCircle/>
                            </a>
                            <a href="mailto: taqi.hossain@gmail.com" rel="noopener noreferrer">
                                <Image className='social-icon' src={gmail} roundedCircle/>
                            </a>
                        
                    </div>

                </div>

            </div>
        </>
    );
}

export default Intro;