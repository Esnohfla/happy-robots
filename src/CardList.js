import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    return ( 
      <div className = "cf pa2"> 
      {
        robots.map((user, index) => {
            return ( 
              <Card key = {index}
              robo = {robots[index].id}
              name = {robots[index].name}
              email = {robots[index].email}
              />
            )
          })
      }
        </div>
      );
    }


    export default CardList;