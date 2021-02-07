import React from 'react';
import { useSelector } from 'react-redux';
import { feedPostsWithLikes } from '../../../Utils/Selectors';
import { Post } from '../../Post/Post';


export const FollowFeed=()=> {
  const feedPostsArray=useSelector(feedPostsWithLikes)
  const renderFollowFeed=feedPostsArray.map(i=>{return <Post author={i.author}
    text={i.text} key={i.id} likes={i.likes}/>})
  return (
    <div >
    {renderFollowFeed}
    </div>
  );
}