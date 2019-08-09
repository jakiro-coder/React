import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from 'prop-types';

/* The secure route is the restriction of entry to a component through a token */

function SecureRoute ({component: Component}) {
  return (
    <Route
      render={props => {
        if (sessionStorage.getItem('token') !== null) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};

SecureRoute.defaultProps = {
  component: null,
};

SecureRoute.propTypes = {

  /** The component to be restricted with a secure route */
  component: PropTypes.object,
}


export default SecureRoute;