import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropType from 'prop-types';
import { getToken } from './Common';

function PrivateRoute(props) {
  const {
    component: Component, location, computedMatch, path,
  } = props;
  return (
    <Route
      location={location}
      computedMatch={computedMatch}
      path={path}
      render={routeProps => (getToken() ? (
        <Component
          history={routeProps.history}
          location={routeProps.location}
          match={routeProps.match}
          staticContext={routeProps.staticContext}
        />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: routeProps.location } }}
        />
      ))}
    />
  );
}

PrivateRoute.propTypes = {
  component: PropType.func.isRequired,
  location: PropType.shape({
    hash: PropType.string,
    key: PropType.string,
    pathname: PropType.string,
    search: PropType.string,
  }),
  computedMatch: PropType.shape({
    isExact: PropType.bool,
    params: PropType.shape(),
    path: PropType.string,
    url: PropType.string,
  }),
  path: PropType.string.isRequired,
};

PrivateRoute.defaultProps = {
  computedMatch: {},
  location: {},
};

export default PrivateRoute;
