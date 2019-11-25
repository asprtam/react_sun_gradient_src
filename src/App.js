import React from 'react';
import Obstacles from './obstacles/Obstacles';
import './App.css';
import Sun from './sun/sun';
import Message from './message/message';

const App = () => {
  return (
    <div>
      <div className="bg"></div>
      <Obstacles/> 
      <Sun rayCount="36"/>
      <Message title="Lorem Ipsum" bottomText="Bottom Text"/>
    </div>
  );
}

export default App;
