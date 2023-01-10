import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Resume.css'

import resume from '../assets/Resume_TaqiHossain.pdf';

function Resume() {
  return (
    <>
    <div className='resume-section'>
        <div className='resume-title'>Resume</div>
        <div className='resume-container'>
            <embed src={resume} className='resume' width="700px" height="960px" />
        </div>
    </div>
    </>
  );
}

export default Resume;