import React from 'react';
import { NavLink } from "react-router-dom";

type props={
  url:string
}

export const Navigation=(props:props)=> {
  const {url}=props
  return (
<div>

<NavLink to={`${url}/allfeed`}>Все посты</NavLink>
<NavLink to={`${url}/followfeed`}>Подписки</NavLink>
</div>

  );
}