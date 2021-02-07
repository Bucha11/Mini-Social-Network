import React from 'react';

import { IPostPropsTypes } from './IPost';


export const Post=(props:IPostPropsTypes)=> {
 
  const likesList=props.likes.map(i=>{return <div key={i.id}>{i.name}</div>})
debugger
  return (
    <div>
     <div>{props.author}</div> 
     <div> {props.text}</div> 
    <div >
      Понравилось:
   {likesList}   
    </div>
    </div>
  );
}