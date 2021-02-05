import React from 'react';
import { NavLink } from 'react-router-dom';


export const Profile=()=> {
  return (
    <div >
      Profile
      <NavLink to='/feed/allfeed'>В ленту</NavLink>
    </div>
  );
}