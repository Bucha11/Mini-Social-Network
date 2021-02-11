import React from "react";
import { NavLink } from "react-router-dom";
import { INavigationProps } from "./INavigationProps";

export const Navigation = (props: INavigationProps) => {
  let { url } = props;
  return (
    <div>
      <NavLink to={`${url}/allfeed`}>Все посты</NavLink>
      <NavLink to={`${url}/followfeed`}>Подписки</NavLink>
    </div>
  );
};
