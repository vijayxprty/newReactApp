import React from 'react';
import '../App.css';
import myimage from '../assets/images/iphone.jpg';

function Home() {
  return (
    <div>
        <img src={myimage} alt=""/>
    </div>
  );
}

export default Home;