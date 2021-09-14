import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { Blog } from "../../pages/Blog/Blog";
import { Login } from "../../pages/Login/Login";

export const Routes = () => {
  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() =>
          isLoggedIn ? <Redirect to="/blog" /> : <Redirect to="/login" />
        }
      />

      <Route
        exact
        path="/login"
        render={(props) =>
          !isLoggedIn ? <Login {...props} /> : <Redirect to="/blog" />
        }
      />

      <Route
        exact
        path="/blog"
        render={(props) =>
          isLoggedIn ? <Blog {...props} /> : <Redirect to="/login" />
        }
      />
    </Switch>
  );
};
