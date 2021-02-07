import React from "react";

import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";

import { AllFeed } from "./AllFeed/AllFeed";
import { FollowFeed } from "./FollowFeed/FollowFeed";
import { Navigation } from "./Navigation/Navigation";

export const Feed = () => {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <Navigation url={url} />
      <div>
        <Switch>
          <Route exact path={`${path}/allfeed`}>
            <AllFeed />
          </Route>
          <Route path={`${path}/followfeed`}>
            <FollowFeed />
          </Route>
        </Switch>
      </div>
      <NavLink to="/profile">В профиль</NavLink>
    </div>
  );
};
