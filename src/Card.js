import React from 'react';
import './Card.css'
import 'tachyons'

const Card = ({name, email, robo}) => {
  return (
     <div className="bg-green dib br3 pa3 ma2 grow">
       <div className ="tc">
       <img className="br-100 h4 w4 dib ba b--black-05 pa2"  alt='robots' src={`https://robohash.org/${robo}?size=200x200`} />
          <h1 className="f3 mb2">{name}</h1>
          <h2 className='f5 fw4 white mt0'>{email}</h2>
      </div>
    </div>
  );
}

export default Card;