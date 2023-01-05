import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Intro.css';

// Ext components
import Image from 'react-bootstrap/Image';

// Int components
import me from "../assets/me.png";
import insta from "../assets/insta.jpeg";
import linkedIn from "../assets/linked-in.png";
import gitHub from "../assets/github.png";

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
                        <div className='social-icon'>
                            <Image src={insta} fluid roundedCircle/>
                        </div>
                        <div className='social-icon'>
                            <Image src={linkedIn} fluid roundedCircle/>
                        </div>
                        <div className='social-icon'>
                            <Image src={gitHub} fluid roundedCircle/>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Intro;