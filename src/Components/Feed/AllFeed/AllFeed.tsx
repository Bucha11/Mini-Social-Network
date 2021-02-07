import React from 'react';
import { useSelector } from 'react-redux';
import { allPostsWithLikes } from '../../../Utils/Selectors';
import { Post } from '../../Post/Post';


export const AllFeed=()=> {
  const allPostsArray=useSelector(allPostsWithLikes)
  const renderAllFeed=allPostsArray.map(i=>{return <Post author={i.author}
     text={i.text} key={i.id} likes={i.likes}/>})
  return (
    <div >
      {renderAllFeed}
    </div>
  );
}