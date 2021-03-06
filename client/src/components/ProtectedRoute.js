import React from "react";
import { Redirect, Route } from "react-router-dom";

export default function ProRoute({
  authenticated,
  children,
  component: Component,
  ...rest
}) {
  authenticated === true ? (
    <Route {...rest} component={Component}>
      {console.log("AUTH HERE", authenticated)};
    </Route>
  ) : (
    <Redirect to="/" />
  );
}
