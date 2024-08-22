import React from 'react';
import Title from './Title';
import Circle from './Circle';
import Top from './Top';
import Footer from './Footer';

function Main(){
    return(
        <div className='Main'>
          <Top />
          <Title />
          <Circle />
          <Footer />
        </div> 
       )
}


export default Main;