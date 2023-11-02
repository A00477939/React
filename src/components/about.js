import React from 'react';
import myImage from '../image/Pic.jpeg';



export const About = () => {
  return (
    <div>
        <div>
        <img src={myImage} alt="Hritik1" style={{ width: '50%', height: '50%', display: 'block', margin: '0 auto' }} />
      </div>


      <h3 style={{ textAlign: 'center' }}>Hritik Shashi Arora</h3>
      <p style={{ textAlign: 'center' }}>
      Hello, I'm Hritik Arora. I enjoy exploring new places, trying out exciting cuisines, and building gaming PCs. 
      I've chosen this course because of its intriguing combination of data analytics and software development, and
       I'm looking forward to starting this journey into the world of coding and technology.










      </p>
  
    </div>
  );
};

export default About;
