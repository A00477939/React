import React from 'react';
import myImage from '../image/surat.webp';
import Weather from './Weather';

export const Home = () => {
  return (

    <div>
         <div>
        <img src={myImage} alt="Hritik1" style={{ width: '400px', height: '400px', display: 'block', margin: '0 auto' }} />
      </div>


      <h1 style={{ textAlign: 'center' }}>Surat</h1>
      <p style={{ textAlign: 'center' }}>
      Surat, often called the "Diamond City of India," is known for its thriving diamond and textile industries, making it an economic powerhouse. 
      This vibrant city is also famous for its street food culture, with delectable dishes like 'locho' and 'surti undhiyu' tantalizing taste buds. 
      Surat's rich history, which dates back to the Mughal era, is beautifully reflected in its architecture, including the exquisite Dutch Gardens and Chintamani Jain Temple. 
      With its dynamic economy and cultural heritage, Surat offers a unique blend of tradition and modernity.





      </p>
      <Weather /> {}

  
    </div>
      );

};








export default Home;