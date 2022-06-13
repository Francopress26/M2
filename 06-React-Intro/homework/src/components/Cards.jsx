import React from 'react';
import Card from './Card'
import cities from '../data'
import { Cairns } from '../data';
import { Londres } from '../data';
import { Denver } from '../data';



export default function Cards({name,min,max,img}) {
  // acá va tu código
  // tip, podés usar un map
  return (
  <div>
    
    {cities.map(c => <Card name={c.name} min={c.main.temp_min} max={c.main.temp_max}img={c.weather[0].icon} onClose={()=> alert(c.name)}/> )}
   
  </div>)
};