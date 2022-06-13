import React from 'react';

export default function Card(props) {
  // acá va tu código
  return (<div>
      <button onClick={props.onClose}>X</button>
      <h2>{props.name}</h2>
      <span>Min: </span>
      <br/>
      <span>{props.min}</span>
      <br/>
      <span>Max: </span>
      <br/>
      <span>{props.max}</span>
      <br />
      <span>
          <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="img" />
          
      </span>
      
  </div>)

};